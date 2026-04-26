import { useState } from 'react'
import type { AtsSkinProps } from '@/types'
import { TextInput } from '@/components/shared/TextInput'
import { FileUpload } from '@/components/shared/FileUpload'

const PIPELINE_STAGES = [
  { id: 'applied', label: 'Applied' },
  { id: 'review', label: 'Review' },
  { id: 'interview', label: 'Interview' },
  { id: 'offer', label: 'Offer' },
]

function AshbyeHQ({ job, company, onSubmit }: AtsSkinProps) {
  const [whyText, setWhyText] = useState('')
  const tooLong = whyText.length > 500

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Top bar */}
      <div className="border-b border-gray-100 dark:border-gray-800 px-8 py-4 flex items-center justify-between">
        <span className="text-sm font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          Ashbye<span className="text-gray-400">HQ</span>
        </span>
        <span className="text-xs text-gray-400 dark:text-gray-500">Careers</span>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Job header */}
        <div className="mb-10">
          <p className="text-sm text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">
            {company.name}
          </p>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
            {job.title}
          </h1>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
              {job.location}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
              {job.type}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full capitalize">
              {job.category.replace('-', ' ')}
            </span>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main form — left */}
          <div className="lg:col-span-2">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                onSubmit()
              }}
              className="space-y-10"
            >
              {/* Basic Info */}
              <section className="space-y-5">
                <h2 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                  Basic Info
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <TextInput label="First Name" required />
                  <TextInput label="Last Name" required />
                </div>
                <TextInput label="Email" required type="email" />
                <TextInput label="Phone" type="tel" />
                <TextInput label="Location" placeholder="City, Country" />
              </section>

              <hr className="border-gray-100 dark:border-gray-800" />

              {/* Resume */}
              <section className="space-y-5">
                <h2 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                  Resume
                </h2>
                <FileUpload label="Resume / CV" required />
                <FileUpload label="Cover Letter" />
              </section>

              <hr className="border-gray-100 dark:border-gray-800" />

              {/* Links */}
              <section className="space-y-5">
                <h2 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                  Links
                </h2>
                <TextInput label="LinkedIn" placeholder="https://linkedin.com/in/you" />
                <TextInput label="Personal Website / Portfolio" placeholder="https://" />
                <TextInput label="GitHub" placeholder="https://github.com/you" />
              </section>

              <hr className="border-gray-100 dark:border-gray-800" />

              {/* Custom Questions */}
              <section className="space-y-5">
                <h2 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                  Custom Questions
                </h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Why do you want to work here?
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <textarea
                    value={whyText}
                    onChange={(e) => setWhyText(e.target.value)}
                    required
                    rows={6}
                    maxLength={10000}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-black focus:border-transparent resize-y"
                    placeholder="Tell us about yourself..."
                  />
                  <div className="flex items-center justify-between mt-1">
                    <div>
                      {tooLong && <p className="text-xs text-red-500">Please be concise.</p>}
                    </div>
                    <p
                      className={`text-xs ${
                        tooLong ? 'text-red-500' : 'text-gray-400 dark:text-gray-500'
                      }`}
                    >
                      {whyText.length.toLocaleString()} / 10,000
                    </p>
                  </div>
                </div>
              </section>

              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-md text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  Apply
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar — right */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Pipeline tracker */}
              <div className="border border-gray-100 dark:border-gray-800 rounded-xl p-6">
                <h3 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">
                  Application Status
                </h3>
                <div className="relative">
                  {/* Connector line */}
                  <div className="absolute left-[11px] top-3 bottom-3 w-px bg-gray-100 dark:bg-gray-800" />

                  <ul className="space-y-5 relative">
                    {PIPELINE_STAGES.map((stage, i) => {
                      const isActive = i === 0
                      const isNext = i === 1
                      const isFaded = i >= 2

                      return (
                        <li key={stage.id} className="flex items-center gap-3">
                          <div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 z-10 ${
                              isActive
                                ? 'border-black dark:border-white bg-black dark:bg-white'
                                : isNext
                                  ? 'border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-950'
                                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950'
                            }`}
                          >
                            {isActive && (
                              <div className="w-2 h-2 rounded-full bg-white dark:bg-black" />
                            )}
                          </div>
                          <span
                            className={`text-sm ${
                              isActive
                                ? 'font-semibold text-gray-900 dark:text-gray-100'
                                : isNext
                                  ? 'text-gray-500 dark:text-gray-400'
                                  : isFaded
                                    ? 'text-gray-300 dark:text-gray-600'
                                    : 'text-gray-400'
                            }`}
                          >
                            {stage.label}
                            {isNext && (
                              <span className="ml-2 text-xs text-gray-400 dark:text-gray-500">
                                ← next
                              </span>
                            )}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-6 italic">
                  Status updates within 6–8 business decades.
                </p>
              </div>

              {/* Job details */}
              <div className="border border-gray-100 dark:border-gray-800 rounded-xl p-6 space-y-4">
                <h3 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                  Role Details
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400 dark:text-gray-500">Salary</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {job.salary}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 dark:text-gray-500">Type</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{job.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 dark:text-gray-500">Location</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {job.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 dark:border-gray-800 py-6 text-center">
        <p className="text-xs text-gray-300 dark:text-gray-600">Powered by Ashbye</p>
      </div>
    </div>
  )
}

export default AshbyeHQ
