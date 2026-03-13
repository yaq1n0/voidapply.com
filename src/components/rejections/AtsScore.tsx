import { useState, useEffect } from 'react'
import type { RejectionModeProps } from '@/types'

function AtsScore({ job, company, onComplete }: RejectionModeProps) {
  const [gaugeValue, setGaugeValue] = useState(0)
  const [showCategories, setShowCategories] = useState(false)
  const [showVerdict, setShowVerdict] = useState(false)

  const content = job.rejectionContent['ats-score']
  const targetScore = content?.overallScore ?? 7

  useEffect(() => {
    // Animate gauge from 0 to target
    const duration = 2000
    const start = Date.now()
    const animate = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease out: sweep up high first, then settle down
      const eased =
        progress < 0.6 ? (progress / 0.6) * 85 : 85 - ((progress - 0.6) / 0.4) * (85 - targetScore)
      setGaugeValue(Math.round(eased))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)

    const t1 = setTimeout(() => setShowCategories(true), 2500)
    const t2 = setTimeout(() => setShowVerdict(true), 4500)
    const t3 = setTimeout(onComplete, 10000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [targetScore, onComplete])

  if (!content) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-gray-950 z-50 flex items-center justify-center">
        <p className="text-gray-500">No ATS score content available.</p>
      </div>
    )
  }

  const gaugeColor = gaugeValue > 60 ? '#22c55e' : gaugeValue > 30 ? '#eab308' : '#ef4444'

  return (
    <div className="fixed inset-0 bg-gray-50 dark:bg-gray-950 z-50 overflow-y-auto">
      <div className="max-w-2xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              AI Screening Results — {company.name}
            </span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Application Compatibility Score
          </h1>
        </div>

        {/* Gauge */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 mb-6 text-center">
          <svg viewBox="0 0 200 120" className="w-48 mx-auto">
            {/* Background arc */}
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="12"
              strokeLinecap="round"
            />
            {/* Value arc */}
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke={gaugeColor}
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="251"
              strokeDashoffset={251 - (251 * gaugeValue) / 100}
            />
            <text
              x="100"
              y="90"
              textAnchor="middle"
              className="text-3xl font-bold"
              fill="currentColor"
              fontSize="36"
            >
              {gaugeValue}
            </text>
            <text x="100" y="110" textAnchor="middle" fill="#9ca3af" fontSize="12">
              / 100
            </text>
          </svg>
        </div>

        {/* Categories */}
        {showCategories && (
          <div className="space-y-3 mb-6">
            {content.categories.map((cat) => (
              <div
                key={cat.name}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-sm text-gray-900 dark:text-gray-100">
                    {cat.name}
                  </span>
                  <span className="text-sm font-mono text-red-500 font-bold">{cat.score}/100</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-2">
                  <div
                    className="bg-red-500 h-1.5 rounded-full"
                    style={{ width: `${cat.score}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 italic">{cat.comment}</p>
              </div>
            ))}
          </div>
        )}

        {/* Verdict */}
        {showVerdict && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center">
            <p className="text-lg font-bold text-red-600 dark:text-red-400 mb-1">
              Recommendation: AUTO-REJECT
            </p>
            <p className="text-sm text-red-500 dark:text-red-400">Confidence: 99.97%</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AtsScore
