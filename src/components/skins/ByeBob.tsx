import { useState } from 'react'
import type { AtsSkinProps } from '@/types'
import { TextInput } from '@/components/shared/TextInput'
import { TextArea } from '@/components/shared/TextArea'
import { FileUpload } from '@/components/shared/FileUpload'

const CONFETTI_COLORS = ['#ff5a5f', '#ffd166', '#06d6a0', '#118ab2']

function ByeBob({ job, company, onSubmit }: AtsSkinProps) {
  const [submitted, setSubmitted] = useState(false)
  const [bobGone, setBobGone] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setBobGone(true), 4000)
    setTimeout(() => onSubmit(), 6000)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Confetti / post-submit overlay */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-950 overflow-hidden">
          {!bobGone &&
            Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-sm animate-bounce"
                style={{
                  backgroundColor: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
                  left: `${5 + i * 4.5}%`,
                  top: `${(i * 37) % 90}%`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: `${0.5 + (i % 5) * 0.2}s`,
                }}
              />
            ))}
          <div className="text-center z-10 px-6">
            {bobGone ? (
              <div>
                <p className="text-6xl mb-4">😬</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  Oops
                </p>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Looks like Bob isn't home right now.
                </p>
              </div>
            ) : (
              <div>
                <p className="text-3xl font-bold text-[#ff5a5f]">Woohoo! 🎉</p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
                  Bob got your application!
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-[#ff5a5f] px-6 py-10 text-white text-center">
        <p className="text-sm uppercase tracking-widest opacity-80 mb-1">
          {company.name}
        </p>
        <h1 className="text-3xl font-extrabold">{job.title}</h1>
        <p className="mt-3 text-lg font-medium opacity-90">
          We'd love to meet you! 👋
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
            {job.location}
          </span>
          <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
            {job.type}
          </span>
          <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
            {job.salary}
          </span>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-4 py-10 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Section: Welcome */}
          <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-900/30 rounded-2xl p-6 space-y-2">
            <p className="text-xl font-bold text-gray-800 dark:text-gray-100">
              Nice to meet you ✨
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Just a few quick things and you'll be on your way. Promise it won't hurt...
              much.
            </p>
          </div>

          {/* Section: About You */}
          <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 space-y-5 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-xl">🙋</span>
              <h2 className="text-base font-bold text-gray-800 dark:text-gray-100">
                About You
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TextInput label="Hey, what's your first name?" required />
              <TextInput label="And your last name?" required />
            </div>
            <TextInput label="Email address" required type="email" />
            <TextInput label="Phone number (optional, we'll probably call anyway)" type="tel" />
          </div>

          {/* Section: Your Experience */}
          <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 space-y-5 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-xl">💼</span>
              <h2 className="text-base font-bold text-gray-800 dark:text-gray-100">
                Your Experience
              </h2>
            </div>

            <FileUpload label="Drop your resume here ✨" required />
            <TextInput
              label="LinkedIn (optional)"
              placeholder="https://linkedin.com/in/you"
            />
          </div>

          {/* Section: Let's Chat */}
          <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 space-y-5 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-xl">💬</span>
              <h2 className="text-base font-bold text-gray-800 dark:text-gray-100">
                Let's Chat
              </h2>
            </div>

            <TextArea
              label="Anything else you'd like to share?"
              rows={4}
            />

            <p className="text-xs text-gray-400 dark:text-gray-500 italic">
              Bob reads every single message personally. (Bob is on sabbatical.)
            </p>
          </div>

          {/* Submit */}
          <div className="flex flex-col items-center gap-3 pt-2">
            <button
              type="submit"
              className="bg-[#ff5a5f] text-white rounded-full px-8 py-3 font-bold text-base hover:bg-[#e5474c] transition-colors shadow-md hover:shadow-lg"
            >
              Apply Now 🚀
            </button>
            <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
              By applying you agree to let Bob read your application, even though Bob is not here.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ByeBob
