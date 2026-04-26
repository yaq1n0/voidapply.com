import { useState, useEffect } from 'react'
import type { RejectionModeProps } from '@/types'

const DEFAULT_STAGES = [
  { name: 'Phone Screen', result: 'Passed' },
  { name: 'Technical Assessment', result: 'Passed' },
  { name: 'Final Round with VP', result: 'Passed' },
  { name: 'Offer Stage', result: '...' },
]

const GHOST_LINES = [
  { text: "The recruiter has been 'reassigned'.", delay: 0 },
  { text: "This position has been 'put on hold'.", delay: 1200 },
  { text: 'Your feedback will be provided shortly.', delay: 2400 },
  { text: 'We will be in touch regarding next steps.', delay: 6400 },
  { text: '[Status: Under Review since 2024]', delay: 11400 },
]

function InterviewThenGhost({ job, onComplete }: RejectionModeProps) {
  const [phase, setPhase] = useState<'timeline' | 'blank' | 'ghost' | 'done'>('timeline')
  const [visibleStages, setVisibleStages] = useState(0)
  const [visibleGhostLines, setVisibleGhostLines] = useState(0)

  const content = job.rejectionContent['interview-then-ghost']
  const stages = content?.stages ?? DEFAULT_STAGES

  // Timeline: reveal stages one by one
  useEffect(() => {
    if (phase !== 'timeline') return
    if (visibleStages < stages.length - 1) {
      const t = setTimeout(() => setVisibleStages((s) => s + 1), 600)
      return () => clearTimeout(t)
    } else if (visibleStages === stages.length - 1) {
      // Show last stage (with spinner) for 2s then go blank
      const t = setTimeout(() => {
        setVisibleStages(stages.length)
        const t2 = setTimeout(() => setPhase('blank'), 2000)
        return () => clearTimeout(t2)
      }, 600)
      return () => clearTimeout(t)
    }
  }, [visibleStages, phase, stages.length])

  // Blank phase → ghost
  useEffect(() => {
    if (phase !== 'blank') return
    const t = setTimeout(() => setPhase('ghost'), 3000)
    return () => clearTimeout(t)
  }, [phase])

  // Ghost phase: reveal lines via individual timers
  useEffect(() => {
    if (phase !== 'ghost') return
    const timers = GHOST_LINES.map((line, i) =>
      setTimeout(() => setVisibleGhostLines(i + 1), line.delay)
    )
    // onComplete after last line + 3s
    const lastDelay = GHOST_LINES[GHOST_LINES.length - 1]!.delay
    const doneTimer = setTimeout(() => setPhase('done'), lastDelay + 3000)
    return () => {
      timers.forEach(clearTimeout)
      clearTimeout(doneTimer)
    }
  }, [phase])

  // done → onComplete
  useEffect(() => {
    if (phase !== 'done') return
    const t = setTimeout(onComplete, 500)
    return () => clearTimeout(t)
  }, [phase, onComplete])

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto transition-colors duration-700"
      style={{
        backgroundColor: phase === 'blank' ? '#ffffff' : phase === 'ghost' ? '#111827' : '#111827',
      }}
    >
      {/* Timeline phase */}
      {phase === 'timeline' && (
        <div className="min-h-full flex flex-col justify-center max-w-xl mx-auto px-6 py-12">
          <div className="mb-8">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
              Interview Progress
            </p>
            <h1 className="text-2xl font-bold text-white">Your Application Journey</h1>
          </div>

          <div className="space-y-0">
            {stages.slice(0, visibleStages).map((stage, i) => {
              const isPassed = stage.result === 'Passed'
              const isLast = i === stages.length - 1

              return (
                <div key={i} className="flex gap-4">
                  {/* Timeline connector column */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0
                        ${isPassed ? 'bg-green-500 text-white' : 'bg-gray-600 text-gray-300'}`}
                    >
                      {isPassed ? (
                        '✓'
                      ) : (
                        <span className="inline-block animate-spin text-base leading-none">⟳</span>
                      )}
                    </div>
                    {!isLast && (
                      <div
                        className="w-0.5 bg-gray-700 flex-1 my-1"
                        style={{ minHeight: '24px' }}
                      />
                    )}
                  </div>

                  {/* Stage content */}
                  <div className="pb-6">
                    <p className="font-semibold text-white text-sm">{stage.name}</p>
                    <p
                      className={`text-xs mt-0.5 ${isPassed ? 'text-green-400' : 'text-gray-400'}`}
                    >
                      {isPassed ? 'Passed — Congratulations!' : 'Evaluating...'}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Blank phase — intentionally empty */}
      {phase === 'blank' && <div className="min-h-full" />}

      {/* Ghost phase */}
      {phase === 'ghost' && (
        <div className="min-h-full flex flex-col justify-center items-center px-6 py-12">
          <div className="max-w-md w-full space-y-5 text-center">
            {GHOST_LINES.slice(0, visibleGhostLines).map((line, i) => (
              <p
                key={i}
                className={`transition-opacity duration-700
                  ${i < 3 ? 'text-gray-400 text-base' : ''}
                  ${i === 3 ? 'text-gray-500 text-sm italic' : ''}
                  ${i === 4 ? 'text-gray-600 text-xs font-mono' : ''}
                `}
              >
                {line.text}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default InterviewThenGhost
