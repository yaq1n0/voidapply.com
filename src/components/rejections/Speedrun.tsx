import { useState, useEffect } from 'react'
import type { RejectionModeProps } from '@/types'

const LEADERBOARD = [
  { company: 'Amazon', time: '0.002s', record: true },
  { company: 'Google', time: '0.003s', record: false },
  { company: 'Meta', time: '0.004s', record: false },
  { company: 'Apple', time: '0.005s', record: false },
  { company: 'Netflix', time: '0.007s', record: false },
  { company: 'Microsoft', time: '0.012s', record: false },
  { company: 'Goldman Sachs', time: '0.045s', record: false },
  { company: 'Deloitte', time: '0.089s', record: false },
]

function Speedrun({ company, onComplete }: RejectionModeProps) {
  const [showStamp, setShowStamp] = useState(false)
  const [showLeaderboard, setShowLeaderboard] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setShowStamp(true), 50)
    const t2 = setTimeout(() => setShowLeaderboard(true), 1500)
    const t3 = setTimeout(onComplete, 8000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-950 z-50 flex items-center justify-center p-4">
      <div className="text-center max-w-lg w-full">
        {showStamp && (
          <div>
            <div className="inline-block border-4 border-red-600 text-red-600 dark:text-red-500 dark:border-red-500 px-8 py-4 rounded-md transform -rotate-8">
              <div className="text-5xl font-black tracking-wider">REJECTED</div>
              <div className="text-sm mt-1 font-mono">in 0.003 seconds</div>
            </div>
          </div>
        )}

        {showLeaderboard && (
          <div className="mt-10">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
              Rejection Speedrun Leaderboard
            </h3>
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700 text-left">
                    <th className="px-4 py-2 text-gray-500 dark:text-gray-400 font-medium">#</th>
                    <th className="px-4 py-2 text-gray-500 dark:text-gray-400 font-medium">
                      Company
                    </th>
                    <th className="px-4 py-2 text-gray-500 dark:text-gray-400 font-medium text-right">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {LEADERBOARD.map((entry, i) => (
                    <tr
                      key={entry.company}
                      className={`border-b border-gray-100 dark:border-gray-800 ${
                        entry.company === company.name
                          ? 'bg-blue-50 dark:bg-blue-900/20 font-semibold'
                          : ''
                      }`}
                    >
                      <td className="px-4 py-2 text-gray-500 dark:text-gray-400">{i + 1}</td>
                      <td className="px-4 py-2 text-gray-900 dark:text-gray-100">
                        {entry.company}
                        {entry.record && (
                          <span className="ml-2 text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-1.5 py-0.5 rounded">
                            WR
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-2 text-right font-mono text-gray-700 dark:text-gray-300">
                        {entry.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Speedrun
