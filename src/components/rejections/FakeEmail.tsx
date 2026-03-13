import { useState, useEffect } from 'react'
import type { RejectionModeProps } from '@/types'

function FakeEmail({ job, company, onComplete }: RejectionModeProps) {
  const [loading, setLoading] = useState(true)
  const [showEmail, setShowEmail] = useState(false)
  const [countdown, setCountdown] = useState<number | null>(null)

  const content = job.rejectionContent['fake-email']

  useEffect(() => {
    const t1 = setTimeout(() => setLoading(false), 2000)
    const t2 = setTimeout(() => setShowEmail(true), 2500)
    const t3 = setTimeout(() => setCountdown(5), 7000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  useEffect(() => {
    if (countdown === null) return
    if (countdown <= 0) {
      const timer = setTimeout(onComplete, 1500)
      return () => clearTimeout(timer)
    }
    const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
    return () => clearTimeout(timer)
  }, [countdown, onComplete])

  if (!content) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-gray-950 z-50 flex items-center justify-center">
        <p className="text-gray-500">No rejection email content available.</p>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-gray-100 dark:bg-gray-900 z-50 overflow-y-auto">
      <div className="max-w-3xl mx-auto py-8 px-4">
        {/* Fake inbox header */}
        <div className="bg-white dark:bg-gray-800 rounded-t-lg border border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
            M
          </div>
          <span className="font-medium text-gray-900 dark:text-gray-100">GMailn't</span>
          <span className="text-xs text-gray-400 ml-auto">Inbox (1)</span>
        </div>

        {/* Email */}
        <div className="bg-white dark:bg-gray-800 border-x border-b border-gray-200 dark:border-gray-700 rounded-b-lg">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
            </div>
          ) : showEmail ? (
            <div className="p-6">
              {/* Email header */}
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                  {content.subject}
                </h2>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs">
                    {company.name[0]}
                  </div>
                  <div>
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      {company.name} Talent Team
                    </span>
                    <span className="text-gray-400 ml-2 text-xs">
                      &lt;noreply@{company.id}.com&gt;
                    </span>
                  </div>
                </div>
              </div>

              {/* Email body */}
              <div className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                {content.body}
              </div>

              {/* CV countdown */}
              {countdown !== null && (
                <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    We'll keep your CV on file
                  </p>
                  <p className="text-2xl font-mono font-bold text-gray-900 dark:text-gray-100">
                    Time on file: {countdown > 0 ? countdown : '0'}
                  </p>
                  {countdown <= 0 && (
                    <p className="text-red-500 text-sm mt-1 font-medium">Deleted.</p>
                  )}
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default FakeEmail
