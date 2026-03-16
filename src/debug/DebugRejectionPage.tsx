import React, { Suspense, lazy } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { mockJob, mockCompany } from './mockData'
import type { RejectionModeProps } from '@/types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const REJECTION_REGISTRY = new Map<string, React.ComponentType<any>>([
  ['dev-null', lazy(() => import('@/components/rejections/DevNull'))],
  ['ghost', lazy(() => import('@/components/rejections/Ghost'))],
  ['speedrun', lazy(() => import('@/components/rejections/Speedrun'))],
  ['fake-email', lazy(() => import('@/components/rejections/FakeEmail'))],
  ['ats-score', lazy(() => import('@/components/rejections/AtsScore'))],
  ['shredder', lazy(() => import('@/components/rejections/Shredder'))],
  ['black-hole', lazy(() => import('@/components/rejections/BlackHole'))],
  ['assessment-gauntlet', lazy(() => import('@/components/rejections/AssessmentGauntlet'))],
  ['culture-fit', lazy(() => import('@/components/rejections/CultureFit'))],
  ['interview-then-ghost', lazy(() => import('@/components/rejections/InterviewThenGhost'))],
  ['phantom-offer', lazy(() => import('@/components/rejections/PhantomOffer'))],
])

export function DebugRejectionPage() {
  const { modeId } = useParams<{ modeId: string }>()
  const navigate = useNavigate()

  const handleComplete = () => {
    navigate('/debug')
  }

  const RejectionComponent = modeId ? REJECTION_REGISTRY.get(modeId) : undefined
  const rejectionProps: RejectionModeProps = {
    job: mockJob,
    company: mockCompany,
    onComplete: handleComplete,
  }

  return (
    <>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-b border-yellow-200 dark:border-yellow-800 px-4 py-2 flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-yellow-800 dark:text-yellow-400">DEBUG</span>
          <span className="text-yellow-700 dark:text-yellow-500">rejection: {modeId}</span>
        </div>
        <Link to="/debug" className="text-yellow-600 dark:text-yellow-400 hover:underline">
          back to debug
        </Link>
      </div>

      <Suspense fallback={<LoadingFallback />}>
        {RejectionComponent ? (
          <RejectionComponent {...rejectionProps} />
        ) : (
          <div className="max-w-xl mx-auto px-4 py-20 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Unknown rejection mode: <code className="font-mono">{modeId}</code>
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
