import { useState, useEffect } from 'react'
import type { RejectionModeProps } from '@/types'

type Phase = 'normal' | 'pulling' | 'singularity' | 'done'

function BlackHole({ job, company, onComplete }: RejectionModeProps) {
  const [phase, setPhase] = useState<Phase>('normal')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('pulling'), 1000)
    const t2 = setTimeout(() => setPhase('singularity'), 3000)
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

  const fragments = [
    'Resume',
    'Cover Letter',
    'Skills',
    job.title,
    company.name,
    'Experience',
    'References',
  ]

  const bgClass =
    phase === 'normal' ? 'bg-gray-100' : phase === 'pulling' ? 'bg-gray-900' : 'bg-black'

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-colors duration-1000 ${bgClass}`}
    >
      <style>{`
        @keyframes orbit-in {
          from {
            opacity: 1;
            transform: scale(1) rotate(0deg) translateX(0);
          }
          to {
            opacity: 0;
            transform: scale(0) rotate(720deg) translateX(-50%);
          }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 60px 20px rgba(88, 28, 163, 0.5); }
          50% { box-shadow: 0 0 80px 30px rgba(124, 58, 237, 0.7); }
        }
      `}</style>

      {/* Normal phase: submission text */}
      {phase === 'normal' && (
        <div className="text-center">
          <p className="text-gray-700 text-lg font-medium animate-pulse">
            Submitting your application...
          </p>
          <div className="mt-4 flex gap-1 justify-center">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Orbiting text fragments during pulling phase */}
      {phase === 'pulling' &&
        fragments.map((text, i) => (
          <div
            key={i}
            className="absolute text-sm font-mono text-white select-none"
            style={{
              animation: `orbit-in ${1 + i * 0.3}s ease-in forwards`,
              animationDelay: `${i * 0.1}s`,
              left: `${15 + i * 10}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
          >
            {text}
          </div>
        ))}

      {/* Black hole circle — grows through phases */}
      {(phase === 'pulling' || phase === 'singularity' || phase === 'done') && (
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black transition-all duration-[2000ms]"
          style={{
            width: phase === 'singularity' || phase === 'done' ? 300 : phase === 'pulling' ? 80 : 0,
            height:
              phase === 'singularity' || phase === 'done' ? 300 : phase === 'pulling' ? 80 : 0,
            animation: phase === 'singularity' ? 'pulse-glow 2s ease-in-out infinite' : 'none',
            boxShadow:
              phase === 'singularity'
                ? '0 0 60px 20px rgba(88, 28, 163, 0.5)'
                : phase === 'done'
                  ? '0 0 40px 15px rgba(88, 28, 163, 0.3)'
                  : 'none',
          }}
        />
      )}

      {/* Singularity ring decoration */}
      {phase === 'singularity' && (
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-purple-500 opacity-60 transition-all duration-[2000ms]"
          style={{ width: 340, height: 340 }}
        />
      )}

      {/* Done message */}
      {phase === 'done' && (
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 text-center w-full max-w-md px-6">
          <p className="text-white text-lg font-semibold leading-relaxed">
            Your application has crossed the event horizon.
          </p>
          <p className="text-purple-300 text-sm mt-2">No information escapes.</p>
          <p className="text-gray-600 text-xs mt-4 font-mono">
            Hawking radiation detected: 0 callbacks
          </p>
        </div>
      )}
    </div>
  )
}

export default BlackHole
