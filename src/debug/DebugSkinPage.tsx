import { Suspense, lazy, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { mockJob, mockCompany } from './mockData'

const WorkNight = lazy(() => import('@/components/skins/WorkNight'))
const GreenHouseOfPain = lazy(() => import('@/components/skins/GreenHouseOfPain'))
const Talaeo = lazy(() => import('@/components/skins/Talaeo'))

export function DebugSkinPage() {
  const { skinId } = useParams<{ skinId: string }>()
  const navigate = useNavigate()
  const [rejectionMode, setRejectionMode] = useState('dev-null')

  const handleSubmit = () => {
    navigate(`/debug/rejection/${rejectionMode}`)
  }

  return (
    <>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-b border-yellow-200 dark:border-yellow-800 px-4 py-2 flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-yellow-800 dark:text-yellow-400">DEBUG</span>
          <span className="text-yellow-700 dark:text-yellow-500">skin: {skinId}</span>
          <label className="flex items-center gap-1.5 text-yellow-700 dark:text-yellow-500">
            then:
            <select
              value={rejectionMode}
              onChange={(e) => setRejectionMode(e.target.value)}
              className="px-1.5 py-0.5 border border-yellow-300 dark:border-yellow-700 rounded bg-white dark:bg-gray-900 text-yellow-900 dark:text-yellow-300"
            >
              <option value="dev-null">/dev/null</option>
              <option value="ghost">ghost</option>
              <option value="speedrun">speedrun</option>
              <option value="fake-email">fake-email</option>
              <option value="ats-score">ats-score</option>
            </select>
          </label>
        </div>
        <Link to="/debug" className="text-yellow-600 dark:text-yellow-400 hover:underline">
          back to debug
        </Link>
      </div>

      <Suspense fallback={<LoadingFallback />}>
        {skinId === 'worknight' && (
          <WorkNight job={mockJob} company={mockCompany} onSubmit={handleSubmit} />
        )}
        {skinId === 'greenhouse-of-pain' && (
          <GreenHouseOfPain job={mockJob} company={mockCompany} onSubmit={handleSubmit} />
        )}
        {skinId === 'talaeo' && (
          <Talaeo job={mockJob} company={mockCompany} onSubmit={handleSubmit} />
        )}
        {!['worknight', 'greenhouse-of-pain', 'talaeo'].includes(skinId ?? '') && (
          <div className="max-w-xl mx-auto px-4 py-20 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Unknown skin: <code className="font-mono">{skinId}</code>
            </p>
            <Link to="/debug" className="text-sm text-blue-500 mt-4 inline-block">
              back to debug
            </Link>
          </div>
        )}
      </Suspense>
    </>
  )
}

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400" />
    </div>
  )
}
