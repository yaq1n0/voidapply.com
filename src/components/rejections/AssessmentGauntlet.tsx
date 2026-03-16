import { useState, useEffect, useRef } from 'react'
import type { RejectionModeProps } from '@/types'

type Phase =
  | 'redirect'
  | 'step1'
  | 'step2'
  | 'step3'
  | 'step4'
  | 'step5'
  | 'step6'
  | 'complete'
  | 'rejected'

const STEP_PHASES: Phase[] = ['step1', 'step2', 'step3', 'step4', 'step5', 'step6']

const STEP_LABELS = [
  'Cognitive Assessment',
  'Personality Questionnaire',
  'Abstract Reasoning',
  'Video Interview',
  'Work Simulation',
  'Reference Check',
]

function stepNumber(phase: Phase): number {
  const idx = STEP_PHASES.indexOf(phase)
  return idx === -1 ? 0 : idx + 1
}

function AssessmentGauntlet({ onComplete }: RejectionModeProps) {
  const [phase, setPhase] = useState<Phase>('redirect')
  const [progress, setProgress] = useState(0)
  const startTimeRef = useRef<number>(Date.now())
  const [elapsedTime, setElapsedTime] = useState('0:00')

  // Track elapsed time for the rejected screen
  useEffect(() => {
    const interval = setInterval(() => {
      const secs = Math.floor((Date.now() - startTimeRef.current) / 1000)
      const m = Math.floor(secs / 60)
      const s = secs % 60
      setElapsedTime(`${m}:${String(s).padStart(2, '0')}`)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // Redirect → step1
  useEffect(() => {
    if (phase === 'redirect') {
      const timer = setTimeout(() => {
        setPhase('step1')
        setProgress(0)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [phase])

  // Auto-advance steps via progress bar
  useEffect(() => {
    if (!STEP_PHASES.includes(phase)) return

    setProgress(0)
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          return 100
        }
        return p + 5
      })
    }, 100)

    const advance = setTimeout(() => {
      const idx = STEP_PHASES.indexOf(phase)
      const next = STEP_PHASES[idx + 1]
      if (idx < STEP_PHASES.length - 1 && next !== undefined) {
        setPhase(next)
      } else {
        setPhase('complete')
      }
    }, 2200)

    return () => {
      clearInterval(interval)
      clearTimeout(advance)
    }
  }, [phase])

  // complete → rejected
  useEffect(() => {
    if (phase === 'complete') {
      const timer = setTimeout(() => setPhase('rejected'), 2000)
      return () => clearTimeout(timer)
    }
  }, [phase])

  // rejected → onComplete
  useEffect(() => {
    if (phase === 'rejected') {
      const timer = setTimeout(onComplete, 3000)
      return () => clearTimeout(timer)
    }
  }, [phase, onComplete])

  const isStep = STEP_PHASES.includes(phase)
  const currentStepNum = stepNumber(phase)

  return (
    <div className="fixed inset-0 bg-gray-50 z-50 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-[#2c3e50] text-white px-6 py-3 flex items-center justify-between flex-shrink-0">
        <div>
          <span className="text-lg font-bold tracking-tight">PyMetrix™</span>
          <span className="text-gray-400 text-xs ml-2 font-normal">Assessment Platform</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-300">
          <span className="bg-[#1abc9c] text-white px-2 py-0.5 rounded text-xs font-semibold">
            Powered by AI™
          </span>
          <span className="font-mono text-gray-400">{elapsedTime}</span>
        </div>
      </div>

      {/* Step progress bar */}
      {isStep && (
        <div className="bg-white border-b border-gray-200 px-6 py-3 flex-shrink-0">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-semibold text-gray-700">
              Step {currentStepNum} of 6 — {STEP_LABELS[currentStepNum - 1]}
            </span>
            <span className="text-xs text-gray-400 font-mono">{progress}%</span>
          </div>
          <div className="flex gap-1 mb-2">
            {STEP_PHASES.map((_, i) => (
              <div
                key={i}
                className="flex-1 h-1 rounded-full transition-colors duration-300"
                style={{
                  backgroundColor:
                    i < currentStepNum - 1
                      ? '#2980b9'
                      : i === currentStepNum - 1
                        ? '#3498db'
                        : '#e2e8f0',
                }}
              />
            ))}
          </div>
          {/* Per-step fill bar */}
          <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Body */}
      <div className="flex-1 flex items-center justify-center p-6 overflow-auto">
        {/* Redirect screen */}
        {phase === 'redirect' && (
          <div className="text-center max-w-sm">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-6" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Redirecting to PyMetrix™ Assessment Platform...
            </h2>
            <p className="text-gray-500 text-sm">
              Please do not close this window. Your session is being prepared.
            </p>
          </div>
        )}

        {/* Step 1: Cognitive Assessment */}
        {phase === 'step1' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 w-full max-w-lg">
            <h3 className="text-base font-bold text-gray-800 mb-1">Cognitive Assessment</h3>
            <p className="text-xs text-gray-400 mb-4">Estimated time: 45 minutes</p>
            <div className="bg-gray-50 rounded p-4 font-mono text-sm text-gray-700 border border-gray-200">
              <p className="text-gray-500 text-xs mb-2">// Question 1 of 47</p>
              <p>Given an array of integers nums and an integer target,</p>
              <p>return indices of the two numbers such that they add up</p>
              <p>to target. You must achieve O(log n) time complexity,</p>
              <p>O(1) space, and handle all edge cases including:</p>
              <p className="text-red-500">// negative infinity, NaN, and sentient arrays</p>
            </div>
            <div className="mt-4 bg-gray-100 rounded h-20 flex items-center justify-center text-gray-400 text-xs border border-dashed border-gray-300">
              Code editor loading...
            </div>
          </div>
        )}

        {/* Step 2: Personality Questionnaire */}
        {phase === 'step2' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 w-full max-w-lg">
            <h3 className="text-base font-bold text-gray-800 mb-1">
              Personality Questionnaire
            </h3>
            <p className="text-xs text-gray-400 mb-4">73 questions • Section 1 of 9</p>
            {[
              'I enjoy completing tasks even when they are assigned by someone who clearly does not understand the task.',
              'When faced with ambiguity, I prefer to: (a) ask for clarity (b) silently suffer (c) update my LinkedIn.',
              'I would describe my relationship with work-life balance as:',
            ].map((q, i) => (
              <div key={i} className="mb-4">
                <p className="text-sm text-gray-700 mb-2">
                  {i + 1}. {q}
                </p>
                <div className="flex gap-4 text-xs text-gray-500">
                  {['Strongly Agree', 'Agree', 'Neutral', 'Disagree'].map((opt) => (
                    <label key={opt} className="flex items-center gap-1 cursor-default">
                      <input type="radio" disabled className="opacity-50" />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Step 3: Abstract Reasoning */}
        {phase === 'step3' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 w-full max-w-lg">
            <h3 className="text-base font-bold text-gray-800 mb-1">Abstract Reasoning</h3>
            <p className="text-xs text-gray-400 mb-4">Identify the pattern. Question 1 of 22.</p>
            <div className="bg-gray-50 border border-gray-200 rounded p-4 font-mono text-sm text-gray-700 leading-relaxed">
              <pre className="text-center text-lg">{`  ■ □ ■        ■ □ □
  □ ■ □   →   □ ■ ■
  ■ □ ■        ? □ ■`}</pre>
              <p className="text-center text-xs text-gray-500 mt-3">What replaces the ?</p>
              <div className="grid grid-cols-4 gap-2 mt-4 text-center text-xs">
                {['■', '□', '▣', '◆'].map((sym) => (
                  <div
                    key={sym}
                    className="border border-gray-300 rounded py-2 text-lg cursor-default opacity-70"
                  >
                    {sym}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Video Interview */}
        {phase === 'step4' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 w-full max-w-lg">
            <h3 className="text-base font-bold text-gray-800 mb-1">Video Interview</h3>
            <p className="text-xs text-gray-400 mb-4">12 questions • 2 minutes per response</p>
            <div className="bg-gray-900 rounded-lg aspect-video flex flex-col items-center justify-center relative overflow-hidden">
              <div className="w-4 h-4 rounded-full bg-red-500 animate-pulse absolute top-3 right-3" />
              <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded-full bg-gray-500" />
              </div>
              <p className="text-gray-500 text-xs text-center px-4">
                &quot;Describe a time you showed initiative while simultaneously not showing too
                much initiative.&quot;
              </p>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Your responses are analyzed by 14 AI models simultaneously.
            </p>
          </div>
        )}

        {/* Step 5: Work Simulation */}
        {phase === 'step5' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 w-full max-w-lg">
            <h3 className="text-base font-bold text-gray-800 mb-1">Work Simulation</h3>
            <p className="text-xs text-gray-400 mb-4">Estimated completion time: 4 hours</p>
            <div className="border border-yellow-200 bg-yellow-50 rounded p-3 mb-4 text-sm text-yellow-800">
              Please complete the following 4-hour spreadsheet exercise. You will not be
              compensated for this time.
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">1.</span>
                <span>
                  Build a revenue forecast model in Excel using data we&apos;ll provide after you
                  sign an NDA
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">2.</span>
                <span>
                  Create 3 pivot tables, 2 dashboards, and a DCF analysis from scratch
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">3.</span>
                <span>
                  Present your findings to a panel of 8 stakeholders (scheduling TBD)
                </span>
              </div>
            </div>
            <div className="mt-4 bg-gray-100 rounded h-8 flex items-center justify-center text-gray-400 text-xs">
              Upload spreadsheet (.xlsx only, max 2MB)
            </div>
          </div>
        )}

        {/* Step 6: Reference Check */}
        {phase === 'step6' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 w-full max-w-lg">
            <h3 className="text-base font-bold text-gray-800 mb-1">Reference Check</h3>
            <p className="text-xs text-gray-400 mb-4">Contacting 12 references. Please wait...</p>
            <div className="space-y-2">
              {[
                { name: 'Manager (2019–2021)', status: 'Contacting...', color: 'yellow' },
                { name: 'Skip-level Manager', status: 'Contacting...', color: 'yellow' },
                { name: 'Peer Reference #1', status: 'Left on read', color: 'gray' },
                { name: 'Peer Reference #2', status: 'Responding...', color: 'blue' },
                { name: 'Your barista', status: 'Unreachable', color: 'red' },
              ].map((ref, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between text-sm py-2 border-b border-gray-100 last:border-0"
                >
                  <span className="text-gray-700">{ref.name}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium
                      ${ref.color === 'yellow' ? 'bg-yellow-100 text-yellow-700' : ''}
                      ${ref.color === 'gray' ? 'bg-gray-100 text-gray-500' : ''}
                      ${ref.color === 'blue' ? 'bg-blue-100 text-blue-600' : ''}
                      ${ref.color === 'red' ? 'bg-red-100 text-red-600' : ''}
                    `}
                  >
                    {ref.status}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">
              7 more references pending contact
            </p>
          </div>
        )}

        {/* Complete */}
        {phase === 'complete' && (
          <div className="text-center max-w-sm">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Assessment Complete</h2>
            <p className="text-gray-500 text-sm">Results submitted. Processing by AI...</p>
          </div>
        )}

        {/* Rejected */}
        {phase === 'rejected' && (
          <div className="bg-white rounded-lg shadow-sm border border-red-100 p-8 w-full max-w-lg text-center">
            <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Not a Match</h2>
            <p className="text-gray-600 text-sm mb-5 leading-relaxed">
              Our AI-powered screening has determined you are not a match at this time. Your
              responses will be stored for 7 years.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 text-left space-y-2 border border-gray-100 font-mono text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Assessment completed in:</span>
                <span className="text-gray-800">{elapsedTime}</span>
              </div>
              <div className="flex justify-between">
                <span>Match percentage:</span>
                <span className="text-red-500 font-bold">4%</span>
              </div>
              <div className="flex justify-between">
                <span>Stages completed:</span>
                <span className="text-gray-800">6 / 6</span>
              </div>
              <div className="flex justify-between">
                <span>AI models consulted:</span>
                <span className="text-gray-800">14</span>
              </div>
            </div>
            <p className="text-gray-400 text-xs mt-4">
              We encourage you to apply again in 6 months. Or 6 years.
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-[#2c3e50] text-gray-500 text-xs text-center py-2 flex-shrink-0">
        PyMetrix™ v4.2.1 — Candidate Experience Score: Pending
      </div>
    </div>
  )
}

export default AssessmentGauntlet
