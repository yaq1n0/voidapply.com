import { useState, useEffect } from 'react'
import type { RejectionModeProps } from '@/types'

const stages = ['Resume Screened', 'Phone Screen', 'Technical', 'Final Round', 'References Checked']

function CultureFit({ job, company, onComplete }: RejectionModeProps) {
  const [phase, setPhase] = useState<'racing' | 'pending' | 'email' | 'done'>('racing')
  const [completedStages, setCompletedStages] = useState(0)

  const content = job.rejectionContent['culture-fit']
  const recruiterContent = content ?? { recruiterName: 'Alex from Talent', stageReached: 'Final Round' }
  const companyEmail = company.name.toLowerCase().replace(/\s+/g, '') + '.com'

  // Stage racing animation
  useEffect(() => {
    if (phase !== 'racing') return
    if (completedStages < stages.length) {
      const t = setTimeout(() => setCompletedStages(s => s + 1), 400)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => setPhase('pending'), 500)
      return () => clearTimeout(t)
    }
  }, [completedStages, phase])

  // Pending → email
  useEffect(() => {
    if (phase !== 'pending') return
    const t = setTimeout(() => setPhase('email'), 2000)
    return () => clearTimeout(t)
  }, [phase])

  // Email → done
  useEffect(() => {
    if (phase !== 'email') return
    const t = setTimeout(() => setPhase('done'), 3000)
    return () => clearTimeout(t)
  }, [phase])

  // done → onComplete
  useEffect(() => {
    if (phase !== 'done') return
    const t = setTimeout(onComplete, 500)
    return () => clearTimeout(t)
  }, [phase, onComplete])

  return (
    <div className="fixed inset-0 bg-slate-50 dark:bg-gray-950 z-50 overflow-y-auto">
      <div className="max-w-2xl mx-auto py-10 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Application Status Dashboard — {company.name}
            </span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Hiring Progress
          </h1>
        </div>

        {/* Racing / Pending phase */}
        {(phase === 'racing' || phase === 'pending') && (
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8">
            <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-6">
              Application Stages
            </h2>
            <div className="space-y-4">
              {stages.map((stage, i) => (
                <div key={stage} className="flex items-center gap-3">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all duration-300
                      ${i < completedStages
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-400'
                      }`}
                  >
                    {i < completedStages ? '✓' : i + 1}
                  </div>
                  <span
                    className={`text-sm font-medium transition-colors duration-300
                      ${i < completedStages
                        ? 'text-gray-900 dark:text-gray-100'
                        : 'text-gray-400 dark:text-gray-600'
                      }`}
                  >
                    {stage}
                    {i < completedStages && (
                      <span className="ml-2 text-green-500 text-xs">✓</span>
                    )}
                  </span>
                </div>
              ))}

              {/* Offer Pending row */}
              {phase === 'pending' && (
                <div className="flex items-center gap-3 pt-2 border-t border-gray-100 dark:border-gray-700">
                  <div className="w-7 h-7 rounded-full bg-yellow-100 dark:bg-yellow-900/40 flex items-center justify-center flex-shrink-0">
                    <span className="animate-pulse text-base">⏳</span>
                  </div>
                  <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-400 animate-pulse">
                    Offer Pending...
                  </span>
                </div>
              )}
            </div>

            {phase === 'pending' && (
              <div className="mt-6 flex items-center justify-center gap-3 text-gray-500 dark:text-gray-400 text-sm">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500" />
                <span>Preparing your offer package...</span>
              </div>
            )}
          </div>
        )}

        {/* Email phase */}
        {phase === 'email' && (
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg animate-in fade-in duration-500">
            {/* Email client header bar */}
            <div className="bg-gray-100 dark:bg-gray-700 px-5 py-3 border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {recruiterContent.recruiterName[0]}
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {recruiterContent.recruiterName}
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-500">
                  &lt;talent@{companyEmail}&gt;
                </span>
              </div>
              <div className="pl-8">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  <span className="font-medium">To:</span> candidate@email.com
                </p>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mt-1">
                  Update on your application
                </p>
              </div>
            </div>

            {/* Email body */}
            <div className="px-6 py-6 text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>Dear Candidate,</p>
              <p>
                After careful consideration, we've decided to move forward with
                candidates who are a stronger <strong>cultural fit</strong> for our team.
              </p>
              <p>
                We genuinely enjoyed learning about your background and wish you
                the best in your search.
              </p>
              <div className="pt-2">
                <p>Best regards,</p>
                <p className="font-medium text-gray-900 dark:text-gray-100 mt-1">
                  {recruiterContent.recruiterName}
                </p>
                <p className="text-gray-500 dark:text-gray-400">{company.name} Talent Team</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CultureFit
