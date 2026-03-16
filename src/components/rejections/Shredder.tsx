import { useState, useEffect } from 'react'
import type { RejectionModeProps } from '@/types'

type Phase = 'document' | 'shredding' | 'strips' | 'done'

function Shredder({ onComplete }: RejectionModeProps) {
  const [phase, setPhase] = useState<Phase>('document')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('shredding'), 1000)
    const t2 = setTimeout(() => setPhase('strips'), 3000)
    const t3 = setTimeout(() => setPhase('done'), 5000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  useEffect(() => {
    if (phase === 'done') {
      const timer = setTimeout(onComplete, 3000)
      return () => clearTimeout(timer)
    }
  }, [phase, onComplete])

  return (
    <div className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center overflow-hidden">
      <style>{`
        @keyframes fall {
          from { transform: translateY(0); opacity: 1; }
          to { transform: translateY(80vh); opacity: 0; }
        }
        @keyframes shred-up {
          from { transform: translateY(0); opacity: 1; }
          to { transform: translateY(-60vh); opacity: 0.2; }
        }
      `}</style>

      {/* Shredder machine — always visible at top */}
      {(phase === 'shredding' || phase === 'strips') && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-20 bg-gray-600 rounded-b-xl flex flex-col justify-center gap-1.5 px-4 shadow-2xl border-b-4 border-gray-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-0.5 bg-gray-400 rounded-full" />
          ))}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-32 h-2 bg-gray-700 rounded-full" />
        </div>
      )}

      {/* Document */}
      {(phase === 'document' || phase === 'shredding') && (
        <div
          className="relative bg-white rounded-md shadow-2xl w-72 p-6 flex flex-col gap-3"
          style={{
            animation: phase === 'shredding' ? 'shred-up 1.8s ease-in forwards' : 'none',
          }}
        >
          {/* Fake document header */}
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
              JD
            </div>
            <div>
              <div className="h-2 bg-gray-800 rounded w-28" />
              <div className="h-1.5 bg-gray-300 rounded w-20 mt-1" />
            </div>
          </div>
          {/* Fake form lines */}
          <div className="space-y-2 mt-1">
            <div className="h-1.5 bg-gray-200 rounded w-full" />
            <div className="h-1.5 bg-gray-200 rounded w-5/6" />
            <div className="h-1.5 bg-gray-200 rounded w-full" />
            <div className="h-1.5 bg-gray-200 rounded w-4/6" />
          </div>
          <div className="border-t border-gray-100 pt-3 space-y-2">
            <div className="h-1.5 bg-gray-200 rounded w-full" />
            <div className="h-1.5 bg-gray-200 rounded w-5/6" />
            <div className="h-1.5 bg-gray-200 rounded w-full" />
          </div>
          <div className="border-t border-gray-100 pt-3 space-y-2">
            <div className="h-1.5 bg-gray-200 rounded w-3/4" />
            <div className="h-1.5 bg-gray-200 rounded w-full" />
            <div className="h-1.5 bg-gray-300 rounded w-2/3" />
          </div>
          {/* Fake submit button */}
          <div className="mt-2 h-8 bg-blue-500 rounded-md flex items-center justify-center">
            <div className="h-2 bg-blue-300 rounded w-24" />
          </div>
        </div>
      )}

      {/* Paper strips confetti */}
      {phase === 'strips' && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 rounded-sm"
              style={{
                left: `${10 + i * 3.3}%`,
                top: '10%',
                height: `${40 + Math.random() * 60}px`,
                backgroundColor: ['#f87171', '#60a5fa', '#34d399', '#fbbf24', '#a78bfa'][i % 5],
                animation: `fall ${0.5 + i * 0.05}s ease-in forwards`,
                animationDelay: `${i * 0.03}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Done message */}
      {phase === 'done' && (
        <div className="text-center max-w-md px-6 animate-fade-in">
          <div className="text-6xl mb-6">🗑️</div>
          <h2 className="text-2xl font-bold text-white mb-4">Application Shredded</h2>
          <p className="text-gray-300 text-base leading-relaxed">
            Your application has been shredded. For the environment, we&apos;ve recycled it into
            another company&apos;s job listing.
          </p>
          <p className="text-gray-500 text-sm mt-4 font-mono">
            Shredded at 24 strips/sec. Zero carbon footprint.
          </p>
        </div>
      )}
    </div>
  )
}

export default Shredder
