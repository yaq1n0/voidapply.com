import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import type { RejectionModeProps } from '@/types'

const LINES = [
  '$ cat application.pdf',
  'Reading application...',
  'Name: [REDACTED]',
  'Experience: Impressive, actually',
  'Cover Letter: Heartfelt and well-written',
  '',
  '$ cat application.pdf | review --thorough',
  'Reviewing with great care and attention...',
  'Score: 94/100',
  'Recommendation: STRONG HIRE',
  '',
  '$ cat application.pdf | review --thorough | /dev/null',
  '',
  '> /dev/null: Application successfully discarded.',
  '> Pipeline complete. 0 bytes retained.',
]

function DevNull({ onComplete }: RejectionModeProps) {
  const [visibleLines, setVisibleLines] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (visibleLines < LINES.length) {
      const delay = LINES[visibleLines] === '' ? 300 : 80 + Math.random() * 120
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), delay)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => setDone(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [visibleLines])

  useEffect(() => {
    if (done) {
      const timer = setTimeout(onComplete, 3000)
      return () => clearTimeout(timer)
    }
  }, [done, onComplete])

  return (
    <div className="fixed inset-0 bg-gray-950 z-50 flex items-center justify-center p-4">
      <motion.div
        className="w-full max-w-2xl bg-black rounded-lg overflow-hidden border border-gray-700 shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Terminal header */}
        <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-xs text-gray-400 ml-2 font-mono">rejection-pipeline.sh</span>
        </div>

        {/* Terminal body */}
        <div className="p-4 font-mono text-sm text-green-400 min-h-[300px]">
          {LINES.slice(0, visibleLines).map((line, i) => (
            <div
              key={i}
              className={`${line.startsWith('$') ? 'text-white' : line.startsWith('>') ? 'text-red-400' : 'text-green-400'}`}
            >
              {line || '\u00A0'}
            </div>
          ))}
          {visibleLines < LINES.length && <span className="animate-pulse">_</span>}
        </div>

        {done && (
          <motion.div
            className="p-6 text-center border-t border-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-300 text-sm">Your application has been piped to /dev/null.</p>
            <p className="text-gray-500 text-xs mt-2">
              This is the most efficient rejection pipeline in the industry.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default DevNull
