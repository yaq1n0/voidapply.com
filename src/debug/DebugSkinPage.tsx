import React, { Suspense, lazy, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { mockJob, mockCompany } from './mockData'
import type { AtsSkinProps } from '@/types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SKIN_REGISTRY = new Map<string, React.ComponentType<any>>([
  ['worknight', lazy(() => import('@/components/skins/WorkNight'))],
  ['greenhouse-of-pain', lazy(() => import('@/components/skins/GreenHouseOfPain'))],
  ['talaeo', lazy(() => import('@/components/skins/Talaeo'))],
  ['linked-out', lazy(() => import('@/components/skins/LinkedOut'))],
  ['ashbye-hq', lazy(() => import('@/components/skins/AshbyeHQ'))],
  ['byebob', lazy(() => import('@/components/skins/ByeBob'))],
  ['rejectable', lazy(() => import('@/components/skins/Rejectable'))],
  ['lever-to-nowhere', lazy(() => import('@/components/skins/LeverToNowhere'))],
  ['bamboom', lazy(() => import('@/components/skins/BamBoom'))],
  ['teamfailor', lazy(() => import('@/components/skins/Teamfailor'))],
  ['icantms', lazy(() => import('@/components/skins/IcantMS'))],
  ['dumb-recruiters', lazy(() => import('@/components/skins/DumbRecruiters'))],
  ['jobvoid', lazy(() => import('@/components/skins/JobVoid'))],
])

const ALL_REJECTION_MODES = [
  'dev-null',
  'ghost',
  'speedrun',
  'shredder',
  'black-hole',
  'assessment-gauntlet',
  'fake-email',
  'ats-score',
  'interview-then-ghost',
  'culture-fit',
  'phantom-offer',
]

export function DebugSkinPage() {
  const { skinId } = useParams<{ skinId: string }>()
  const navigate = useNavigate()
  const [rejectionMode, setRejectionMode] = useState('dev-null')

  const handleSubmit = () => {
    navigate(`/debug/rejection/${rejectionMode}`)
  }

  const SkinComponent = skinId ? SKIN_REGISTRY.get(skinId) : undefined
  const skinProps: AtsSkinProps = { job: mockJob, company: mockCompany, onSubmit: handleSubmit }

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
              {ALL_REJECTION_MODES.map((mode) => (
                <option key={mode} value={mode}>
                  {mode}
                </option>
              ))}
            </select>
          </label>
        </div>
        <Link to="/debug" className="text-yellow-600 dark:text-yellow-400 hover:underline">
          back to debug
        </Link>
      </div>

      <Suspense fallback={<LoadingFallback />}>
        {SkinComponent ? (
          <SkinComponent {...skinProps} />
        ) : (
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
