import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { RejectionModeProps } from '@/types'

function Ghost({ company, onComplete }: RejectionModeProps) {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 5000), // Spinner done
      setTimeout(() => setPhase(2), 10000), // Faint text
      setTimeout(() => setPhase(3), 15000), // Status text
      setTimeout(() => setPhase(4), 20000), // Complete
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  useEffect(() => {
    if (phase === 4) {
      const timer = setTimeout(onComplete, 2000)
      return () => clearTimeout(timer)
    }
  }, [phase, onComplete])

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-950 z-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        {/* Spinner phase */}
        <AnimatePresence>
          {phase < 1 && (
            <motion.div exit={{ opacity: 0 }} className="flex flex-col items-center gap-4">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600" />
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Submitting your application to {company.name}...
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Nothing phase */}
        {phase >= 1 && phase < 2 && <div className="h-20" />}

        {/* Faint text */}
        {phase >= 2 && (
          <motion.p
            className="text-gray-300 dark:text-gray-700 text-sm mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            (This is the most realistic rejection mode)
          </motion.p>
        )}

        {/* Status text */}
        {phase >= 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="space-y-2"
          >
            <p className="text-gray-400 dark:text-gray-600 text-sm">Status: Under Review</p>
            <p className="text-gray-300 dark:text-gray-700 text-xs">(since 2024)</p>
          </motion.div>
        )}

        {phase >= 4 && (
          <motion.p
            className="text-gray-400 dark:text-gray-600 text-xs mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            You have been ghosted. Welcome to the real world.
          </motion.p>
        )}
      </div>
    </div>
  )
}

export default Ghost
