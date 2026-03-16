import { useState, useEffect } from 'react'
import type { AtsSkinProps } from '@/types'
import { TextInput } from '@/components/shared/TextInput'
import { TextArea } from '@/components/shared/TextArea'
import { FileUpload } from '@/components/shared/FileUpload'

function Teamfailor({ job, company, onSubmit }: AtsSkinProps) {
  const [countdown, setCountdown] = useState(30)
  const [unlocked, setUnlocked] = useState(false)
  const [videoProgress, setVideoProgress] = useState(0)

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((c) => c - 1)
        setVideoProgress((30 - countdown + 1) / 30 * 100)
      }, 100)
      return () => clearTimeout(timer)
    } else {
      setUnlocked(true)
      setVideoProgress(100)
    }
  }, [countdown])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Full-bleed header */}
      <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] overflow-hidden">
        {/* Faux culture photo texture */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full grid grid-cols-6 grid-rows-4 gap-1 p-2">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="rounded"
                style={{
                  backgroundColor: `hsl(${160 + (i * 17) % 60}, 40%, ${20 + (i * 7) % 20}%)`,
                }}
              />
            ))}
          </div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
          <p className="text-[#4ac4a1] text-sm font-semibold uppercase tracking-widest mb-2">
            {company.name}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
            {job.title}
          </h1>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full border border-white/20">
              {job.location}
            </span>
            <span className="bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full border border-white/20">
              {job.type}
            </span>
            <span className="bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full border border-white/20">
              {job.salary}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
        {/* About the Role */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
            About the Role
          </h2>
          <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
            {job.description}
          </div>
        </div>

        {/* Meet the Team video section */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
            Meet the Team
          </h2>
          <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">
            Please watch this video before applying. Totally optional. (Not optional.)
          </p>

          {/* Fake video player */}
          <div className="relative rounded-xl overflow-hidden bg-gray-900 dark:bg-gray-800 aspect-video flex flex-col items-center justify-center group cursor-pointer mb-2">
            {/* Fake video content */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full bg-gradient-to-br from-[#4ac4a1]/30 to-[#1a1a2e]" />
            </div>

            {/* Play button */}
            <div className="relative z-10 w-16 h-16 rounded-full bg-white/20 border-2 border-white/50 flex items-center justify-center mb-3 group-hover:bg-white/30 transition-colors">
              <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[16px] border-t-transparent border-b-transparent border-l-white ml-1" />
            </div>

            {/* Overlaid text */}
            <p className="relative z-10 text-white/80 text-sm font-medium">
              {company.name} Culture Video
            </p>
            <p className="relative z-10 text-white/50 text-xs mt-1">
              "We're like a family here" — someone definitely said this
            </p>

            {/* Unlock countdown overlay */}
            {!unlocked && (
              <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full z-20 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ac4a1] animate-pulse inline-block" />
                Apply button unlocks in: {countdown}s
              </div>
            )}
            {unlocked && (
              <div className="absolute top-3 right-3 bg-[#4ac4a1] text-white text-xs px-3 py-1.5 rounded-full z-20">
                Unlocked!
              </div>
            )}

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
              <div
                className="h-full bg-[#4ac4a1] transition-all duration-100"
                style={{ width: `${videoProgress}%` }}
              />
            </div>
          </div>

          {!unlocked && (
            <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
              Finish watching to unlock your application. Yes, this is real. No, there's no skip button.
            </p>
          )}
        </div>

        {/* Application form */}
        <div
          className={`bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 transition-opacity duration-500 ${
            unlocked ? 'opacity-100' : 'opacity-50 pointer-events-none cursor-not-allowed'
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Your Application</h2>
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
              🟡 In Review
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              if (unlocked) onSubmit()
            }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TextInput label="First Name" required />
              <TextInput label="Last Name" required />
            </div>
            <TextInput label="Email Address" required type="email" />
            <TextInput label="Phone Number" type="tel" />
            <FileUpload label="Resume" required />
            <TextArea
              label="Cover Letter"
              rows={5}
              placeholder="Tell us why you'd be a great culture add (not culture fit, we read a blog post)"
            />
            <TextInput
              label="LinkedIn Profile URL"
              placeholder="https://linkedin.com/in/your-profile"
            />

            <div className="pt-2">
              <button
                type="submit"
                disabled={!unlocked}
                className={`w-full py-3 text-white font-semibold rounded-xl text-sm transition-all ${
                  unlocked
                    ? 'bg-[#4ac4a1] hover:bg-[#3aad8c] cursor-pointer'
                    : 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'
                }`}
              >
                {unlocked ? 'Apply Now' : `Watch the video first (${countdown}s remaining)`}
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-400 dark:text-gray-600 text-center pb-4">
          We aim to respond within 5 business days. &mdash; Teamfailor&trade; &copy; Building
          Cultures, Ghosting Candidates
        </p>
      </div>
    </div>
  )
}

export default Teamfailor
