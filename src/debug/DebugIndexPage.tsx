import { Link } from 'react-router-dom'
import { atsSkins } from '@/data/skins'
import { rejectionModes } from '@/data/rejectionModes'

export function DebugIndexPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">Debug Panel</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Test components in isolation with mock data. Only visible in dev.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          ATS Skins
        </h2>
        <div className="grid gap-3">
          {atsSkins.map((skin) => (
            <Link
              key={skin.id}
              to={`/debug/skin/${skin.id}`}
              className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
            >
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  {skin.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{skin.tagline}</p>
              </div>
              <span
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: skin.accentColor }}
              />
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          Rejection Modes
        </h2>
        <div className="grid gap-3">
          {rejectionModes.map((mode) => (
            <Link
              key={mode.id}
              to={`/debug/rejection/${mode.id}`}
              className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
            >
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  {mode.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {mode.description}
                </p>
              </div>
              <span className="text-xs text-gray-400 dark:text-gray-500 shrink-0 ml-4">
                {mode.isGeneric ? 'generic' : 'personalized'}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
