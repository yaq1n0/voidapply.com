import { useState, useEffect } from 'react'
import type { AtsSkinProps } from '@/types'
import { TextArea } from '@/components/shared/TextArea'
import { FileUpload } from '@/components/shared/FileUpload'

function DumbRecruiters({ job, company, onSubmit }: AtsSkinProps) {
  const [score, setScore] = useState(100)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = () =>
    setScore((s) => Math.max(2, s - Math.floor(Math.random() * 3 + 1)))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      onSubmit()
    }, 2000)
  }

  useEffect(() => {
    if (submitted) return
  }, [submitted])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-16">
      {/* Nav Bar */}
      <div className="bg-[#1565c0] text-white">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-bold text-lg tracking-tight">SmartRecruiters</span>
            <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-0.5 rounded-full">
              AI-Powered Hiring&trade;
            </span>
          </div>
          <div className="text-sm text-blue-200 hidden md:block">{company.name}</div>
        </div>
      </div>

      {/* Job Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-5">
          <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">{job.title}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {company.name} &mdash; {job.location} &mdash; {job.type}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* AI Match Score Gauge */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                AI Match Score&trade;
              </span>
              <span className="ml-2 text-xs text-gray-400 dark:text-gray-500">
                Updates in real time as you apply
              </span>
            </div>
            <span
              className={`text-2xl font-bold tabular-nums ${
                score >= 80
                  ? 'text-green-600 dark:text-green-500'
                  : score >= 50
                    ? 'text-yellow-500 dark:text-yellow-400'
                    : 'text-red-600 dark:text-red-500'
              }`}
            >
              {score}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div
              className="h-3 rounded-full transition-all duration-300"
              style={{
                width: `${score}%`,
                backgroundColor:
                  score >= 80 ? '#2e7d32' : score >= 50 ? '#f59e0b' : '#ef4444',
              }}
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-xs text-gray-500 dark:text-gray-500">Powered by SmartAI&trade;</p>
            <p className="text-xs text-gray-400 dark:text-gray-600 italic">
              {score >= 80
                ? 'Strong candidate'
                : score >= 50
                  ? 'Potential fit'
                  : 'Not recommended — keep applying'}
            </p>
          </div>
        </div>

        {/* Submitted Overlay */}
        {submitted && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-10 text-center max-w-md w-full">
              <div className="w-16 h-16 bg-[#1565c0] rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                Application Received
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Your application is being reviewed by Smart AI&trade;.
              </p>
              <p className="text-[#1565c0] dark:text-blue-400 font-semibold mt-2">
                Estimated time: 2&ndash;4 business decades.
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-600 mt-4">
                Your AI Match Score at submission: {score}%
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Section: Personal Info */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <div className="bg-gray-100 dark:bg-gray-800 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                Personal Information
              </h2>
            </div>
            <div className="p-5 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#1565c0] text-sm"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#1565c0] text-sm"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#1565c0] text-sm"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#1565c0] text-sm"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Current Job Title
                  <span className="ml-2 text-xs text-gray-400 dark:text-gray-500 font-normal">
                    (AI compares this to the job title. Good luck.)
                  </span>
                </label>
                <input
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#1565c0] text-sm"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Years of Experience <span className="text-red-500">*</span>
                  <span className="ml-2 text-xs text-gray-400 dark:text-gray-500 font-normal">
                    (Entering truthfully may reduce your score)
                  </span>
                </label>
                <input
                  type="number"
                  min="0"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#1565c0] text-sm"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Section: Resume Upload */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <div className="bg-gray-100 dark:bg-gray-800 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                Resume
              </h2>
            </div>
            <div className="p-5 space-y-3">
              <FileUpload label="Upload Resume" required />
              <p className="text-xs text-gray-400 dark:text-gray-600">
                Our Smart AI&trade; will parse your resume and use it to slightly lower your match
                score.
              </p>
            </div>
          </div>

          {/* Section: Screening Questions */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <div className="bg-gray-100 dark:bg-gray-800 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                Screening Questions
                <span className="ml-2 font-normal normal-case text-xs text-gray-400 dark:text-gray-500">
                  AI-generated
                </span>
              </h2>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Are you authorized to work in the country where this job is posted?{' '}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#1565c0] text-sm"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No (application auto-rejected)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Do you have{' '}
                  <span className="font-bold">
                    {Math.floor(Math.random() * 5) + 8}+ years of experience
                  </span>{' '}
                  with technologies that have existed for{' '}
                  <span className="font-bold">
                    {Math.floor(Math.random() * 3) + 3} years
                  </span>
                  ? <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#1565c0] text-sm"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No (AI will flag this)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  What is your desired salary? <span className="text-red-500">*</span>
                  <span className="ml-2 text-xs text-gray-400 dark:text-gray-500 font-normal">
                    (Answering honestly decreases your score by 15)
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., $120,000"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#1565c0] text-sm"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Section: Additional Questions */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <div className="bg-gray-100 dark:bg-gray-800 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                Additional Questions
              </h2>
            </div>
            <div className="p-5 space-y-4">
              <TextArea
                label={`Why do you want to work at ${company.name}? Our AI checks for brand mentions. Minimum 150 words.`}
                required
                rows={5}
              />
              <TextArea
                label="Describe your greatest professional achievement. Note: our AI has already decided if you're qualified."
                rows={4}
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  LinkedIn Profile URL
                </label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#1565c0] text-sm"
                  onChange={handleChange}
                />
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  Our AI will scrape your LinkedIn regardless of whether you provide this.
                </p>
              </div>
            </div>
          </div>

          {/* Score summary reminder */}
          <div
            className={`rounded-lg p-4 text-sm font-medium text-center border ${
              score >= 80
                ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700 text-green-800 dark:text-green-300'
                : score >= 50
                  ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700 text-yellow-800 dark:text-yellow-300'
                  : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700 text-red-800 dark:text-red-300'
            }`}
          >
            Current AI Match Score&trade;: <strong>{score}%</strong> &mdash;{' '}
            {score >= 80
              ? 'You may be considered.'
              : score >= 50
                ? 'Borderline. Consider lying.'
                : "Below threshold. Submitting anyway won't help, but feel free."}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#1565c0] hover:bg-[#0d47a1] text-white font-semibold rounded-lg text-sm transition-colors"
          >
            Apply Now&trade;
          </button>

          <p className="text-xs text-gray-300 dark:text-gray-700 text-center">
            Powered by SmartRecruiters&trade; &mdash; The World&apos;s #1 Hiring Platform&trade; (self-reported)
          </p>
        </form>
      </div>
    </div>
  )
}

export default DumbRecruiters
