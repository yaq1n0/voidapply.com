import { useState, useEffect } from 'react'
import type { RejectionModeProps } from '@/types'

const DEFAULT_CONTENT = {
  recruiterName: 'Jamie Chen',
  jobTitle: 'Senior Engineer',
  fakeSalary: '$180,000',
  promisedTimeline: 'EOD Friday',
}

function PhantomOffer({ job, company, onComplete }: RejectionModeProps) {
  const [phase, setPhase] = useState<
    'offer-email' | 'countdown' | 'waiting' | 'rescission' | 'done'
  >('offer-email')
  const [hours, setHours] = useState(72)
  const [waitingLine, setWaitingLine] = useState(0)

  const content = job.rejectionContent['phantom-offer'] ?? DEFAULT_CONTENT
  const companyEmail = company.name.toLowerCase().replace(/\s+/g, '') + '.com'

  // Offer email → countdown
  useEffect(() => {
    if (phase !== 'offer-email') return
    const t = setTimeout(() => setPhase('countdown'), 3000)
    return () => clearTimeout(t)
  }, [phase])

  // Countdown: fast decrement (12 hrs per 300ms tick)
  useEffect(() => {
    if (phase !== 'countdown') return
    const t = setInterval(() => {
      setHours((h) => {
        if (h <= 1) {
          clearInterval(t)
          setPhase('waiting')
          return 0
        }
        return h - 12
      })
    }, 300)
    return () => clearInterval(t)
  }, [phase])

  // Waiting phase: show lines then advance to rescission
  useEffect(() => {
    if (phase !== 'waiting') return
    const t1 = setTimeout(() => setWaitingLine(1), 500)
    const t2 = setTimeout(() => setWaitingLine(2), 1500)
    const t3 = setTimeout(() => setPhase('rescission'), 2500)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [phase])

  // Rescission → done
  useEffect(() => {
    if (phase !== 'rescission') return
    const t = setTimeout(() => setPhase('done'), 3000)
    return () => clearTimeout(t)
  }, [phase])

  // done → onComplete
  useEffect(() => {
    if (phase !== 'done') return
    const t = setTimeout(onComplete, 500)
    return () => clearTimeout(t)
  }, [phase, onComplete])

  const padTwo = (n: number) => String(n).padStart(2, '0')

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto transition-colors duration-500"
      style={{
        backgroundColor:
          phase === 'countdown' ? '#111827' : phase === 'waiting' ? '#374151' : '#f3f4f6',
      }}
    >
      {/* Offer email phase */}
      {phase === 'offer-email' && (
        <div className="min-h-full flex items-center justify-center px-4 py-12">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg max-w-xl w-full">
            {/* Email header bar */}
            <div className="bg-gray-100 dark:bg-gray-700 px-5 py-3 border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {content.recruiterName[0]}
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {content.recruiterName}
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
                  🎉 Offer — {content.jobTitle} at {company.name}
                </p>
              </div>
            </div>

            {/* Email body */}
            <div className="px-6 py-6 text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>Hi there!</p>
              <p>
                I'm absolutely thrilled to let you know that we'd like to extend an offer for the{' '}
                <strong>{content.jobTitle}</strong> position at <strong>{company.name}</strong>!
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 space-y-1.5 text-sm">
                <p>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    Compensation:
                  </span>{' '}
                  {content.fakeSalary}
                </p>
                <p>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    Start date:
                  </span>{' '}
                  2 weeks from today
                </p>
                <p>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">Location:</span>{' '}
                  Hybrid (3 days in office, 2 remote)
                </p>
              </div>
              <p>
                We're SO excited to have you join the team. Please expect formal paperwork by{' '}
                <strong>{content.promisedTimeline}</strong> 🎉
              </p>
              <div className="pt-2">
                <p>Warmly,</p>
                <p className="font-medium text-gray-900 dark:text-gray-100 mt-1">
                  {content.recruiterName}
                </p>
                <p className="text-gray-500 dark:text-gray-400">{company.name}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Countdown phase */}
      {phase === 'countdown' && (
        <div className="min-h-full flex flex-col items-center justify-center px-4 py-12">
          <p className="text-gray-400 text-sm font-medium uppercase tracking-widest mb-6">
            Formal offer expected in
          </p>
          <div className="font-mono text-white text-7xl font-bold tabular-nums tracking-tight">
            {padTwo(hours)}
            <span className="text-gray-500 text-5xl mx-1">:</span>
            00
            <span className="text-gray-500 text-5xl mx-1">:</span>
            00
          </div>
          <p className="text-gray-500 text-xs mt-4 tracking-widest uppercase">
            Hours : Minutes : Seconds
          </p>
        </div>
      )}

      {/* Waiting phase */}
      {phase === 'waiting' && (
        <div className="min-h-full flex flex-col items-center justify-center px-4 py-12 gap-6">
          <div className="text-5xl animate-spin" style={{ animationDuration: '2s' }}>
            🕐
          </div>
          {waitingLine >= 1 && (
            <p className="text-white text-lg font-medium">Waiting for paperwork...</p>
          )}
          {waitingLine >= 2 && (
            <p className="text-gray-300 text-sm">Three business days have passed.</p>
          )}
        </div>
      )}

      {/* Rescission email phase */}
      {phase === 'rescission' && (
        <div className="min-h-full flex items-center justify-center px-4 py-12">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg max-w-xl w-full">
            {/* Email header bar */}
            <div className="bg-gray-100 dark:bg-gray-700 px-5 py-3 border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {content.recruiterName[0]}
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {content.recruiterName}
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
                  Re: Your Application — {content.jobTitle}
                </p>
              </div>
            </div>

            {/* Email body */}
            <div className="px-6 py-6 text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>Hi,</p>
              <p>
                After some internal restructuring, we've made the difficult decision to put this
                role on hold.
              </p>
              <p>
                You were our top candidate and we were truly impressed by your background. We hope
                to reconnect when the position reopens.
              </p>
              <p>We wish you all the best.</p>
              <div className="pt-2">
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  {content.recruiterName}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PhantomOffer
