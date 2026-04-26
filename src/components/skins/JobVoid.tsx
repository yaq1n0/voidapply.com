import { useState, useEffect } from 'react'
import type { AtsSkinProps } from '@/types'
import { TextInput } from '@/components/shared/TextInput'
import { TextArea } from '@/components/shared/TextArea'
import { FileUpload } from '@/components/shared/FileUpload'
import { SelectInput } from '@/components/shared/SelectInput'

function JobVoid({ job, company, onSubmit }: AtsSkinProps) {
  const [activityPhase, setActivityPhase] = useState(0)
  const [refNum] = useState(() => Math.floor(10000000 + Math.random() * 90000000).toString())
  const [applicantsCount] = useState(() => Math.floor(Math.random() * 400 + 247))

  useEffect(() => {
    const t = setTimeout(() => setActivityPhase(1), 3000)
    return () => clearTimeout(t)
  }, [])

  const handleSocialSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onSubmit()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit()
  }

  const initials = company.name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-16">
      {/* Top Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
              style={{ backgroundColor: '#e31837' }}
            >
              {initials}
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">{company.name}</p>
              <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100">{job.title}</h1>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                {job.location} &middot; {job.type} &middot; {job.salary}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onSubmit}
            className="px-5 py-2 bg-[#e31837] hover:bg-[#b8101f] text-white text-sm font-semibold rounded transition-colors flex-shrink-0"
          >
            Apply Now
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex gap-8 flex-col lg:flex-row">
          {/* Main Form Column */}
          <div className="flex-1 min-w-0">
            {/* Social Apply */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5 mb-6">
              <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
                Social Apply
              </h2>
              <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">
                Apply in one click using your social profile. We&apos;ll import everything and still
                ask you to fill it all in again.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleSocialSubmit}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 border-2 border-[#0077b5] text-[#0077b5] dark:border-[#0a9dd9] dark:text-[#0a9dd9] rounded-lg font-semibold text-sm hover:bg-[#0077b5] hover:text-white dark:hover:bg-[#0a9dd9] dark:hover:text-white transition-colors"
                >
                  <span className="font-bold text-base leading-none">in</span>
                  Apply with LinkedIn
                </button>
                <button
                  type="button"
                  onClick={handleSocialSubmit}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 border-2 border-[#2164f3] text-[#2164f3] dark:border-[#4f80f7] dark:text-[#4f80f7] rounded-lg font-semibold text-sm hover:bg-[#2164f3] hover:text-white dark:hover:bg-[#4f80f7] dark:hover:text-white transition-colors"
                >
                  <span className="font-bold text-base leading-none">I</span>
                  Apply with Indeed
                </button>
                <button
                  type="button"
                  onClick={handleSocialSubmit}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 border-2 border-gray-800 text-gray-800 dark:border-gray-300 dark:text-gray-300 rounded-lg font-semibold text-sm hover:bg-gray-800 hover:text-white dark:hover:bg-gray-300 dark:hover:text-gray-900 transition-colors"
                >
                  <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current" aria-hidden="true">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  Apply with GitHub
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <div className="px-5 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    Personal Info
                  </h2>
                </div>
                <div className="p-5 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TextInput label="First Name" required />
                    <TextInput label="Last Name" required />
                  </div>
                  <TextInput label="Email Address" required type="email" />
                  <TextInput label="Phone Number" type="tel" />
                </div>
              </div>

              {/* Resume */}
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <div className="px-5 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    Resume
                  </h2>
                </div>
                <div className="p-5 space-y-3">
                  <FileUpload label="Upload Resume" required />
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    Or apply with LinkedIn / Indeed above — we&apos;ll still ask you to upload a
                    PDF.
                  </p>
                  <TextArea label="Cover Letter" rows={4} />
                </div>
              </div>

              {/* Social Profiles */}
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <div className="px-5 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    Social Profiles
                  </h2>
                </div>
                <div className="p-5 space-y-4">
                  <TextInput
                    label="LinkedIn Profile URL"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                  <TextInput
                    label="GitHub Profile URL"
                    placeholder="https://github.com/yourusername"
                  />
                  <TextInput label="Portfolio / Personal Website" placeholder="https://" />
                  <p className="text-xs text-gray-400 dark:text-gray-500 -mt-2">
                    These will be reviewed by a recruiter who is no longer with the company.
                  </p>
                </div>
              </div>

              {/* Custom Questions */}
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <div className="px-5 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    Custom Questions
                  </h2>
                </div>
                <div className="p-5 space-y-4">
                  <TextArea
                    label={`Why do you want to join ${company.name}? (Note: ${company.name} has a hiring freeze.)`}
                    required
                    rows={4}
                  />
                  <SelectInput
                    label="How did you hear about this position?"
                    options={[
                      { value: 'linkedin', label: 'LinkedIn — where hope goes to scroll' },
                      { value: 'jobvite', label: 'Jobvite job board' },
                      { value: 'indeed', label: 'Indeed' },
                      { value: 'referral', label: 'Employee referral (they also got laid off)' },
                      { value: 'company-site', label: 'Company website' },
                      { value: 'glassdoor', label: 'Glassdoor (you read the reviews anyway)' },
                      { value: 'dream', label: 'A recruiter reached out (they vanished)' },
                    ]}
                  />
                </div>
              </div>

              {/* Referral */}
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <div className="px-5 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    Referral
                  </h2>
                </div>
                <div className="p-5 space-y-4">
                  <TextInput
                    label="Referral Employee Name (optional)"
                    placeholder="They may no longer work here"
                  />
                  <TextInput
                    label="Referral Employee Email"
                    type="email"
                    placeholder="Probably bouncing"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#e31837] hover:bg-[#b8101f] text-white font-semibold rounded-lg text-sm transition-colors"
              >
                Submit Application
              </button>

              {/* Footer Notice */}
              <div className="text-xs text-gray-400 dark:text-gray-600 text-center leading-relaxed">
                An email confirmation with reference{' '}
                <span className="font-mono text-gray-500 dark:text-gray-500">JV-{refNum}</span> will
                be sent to the address provided. No other communication will follow.
              </div>

              <p className="text-xs text-gray-300 dark:text-gray-700 text-center">
                Powered by Jobvite&trade; &mdash; Social Recruiting&trade; (candidates not included)
              </p>
            </form>
          </div>

          {/* Sidebar: Recruiter Activity */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5 sticky top-6">
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
                Recruiter Activity
              </h3>

              {activityPhase === 0 ? (
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#e31837] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      S
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Sarah</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Recruiter</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        Viewed your profile
                      </p>
                      <p className="text-xs text-green-500 dark:text-green-400 mt-0.5">
                        3 seconds ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      M
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        Michael
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Hiring Manager</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        Skimmed your resume
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">1 min ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs text-green-600 dark:text-green-400">
                      2 people active
                    </span>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded p-3">
                    <div className="flex items-start gap-2">
                      <span className="text-red-500 text-sm flex-shrink-0 mt-0.5">!</span>
                      <div>
                        <p className="text-xs font-medium text-red-800 dark:text-red-300">
                          Sarah (Recruiter)
                        </p>
                        <p className="text-xs text-red-700 dark:text-red-400 mt-0.5">
                          is no longer with the company.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded p-3">
                    <div className="flex items-start gap-2">
                      <span className="text-gray-400 text-sm flex-shrink-0 mt-0.5">i</span>
                      <div>
                        <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                          Position Update
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                          This position has been filled internally.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-300 dark:text-gray-700 italic">
                    Your application is still being accepted.
                  </p>
                </div>
              )}

              <hr className="border-gray-100 dark:border-gray-800 my-4" />

              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                  Job Details
                </h4>
                <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                  <div className="flex justify-between">
                    <span>Posted</span>
                    <span className="text-gray-900 dark:text-gray-100">{job.postedDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Salary</span>
                    <span className="text-gray-900 dark:text-gray-100">{job.salary}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Type</span>
                    <span className="text-gray-900 dark:text-gray-100">{job.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Applicants</span>
                    <span className="text-gray-900 dark:text-gray-100">{applicantsCount}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded p-3">
                <p className="text-xs text-yellow-800 dark:text-yellow-300 font-medium">
                  Social Hiring Insight&trade;
                </p>
                <p className="text-xs text-yellow-700 dark:text-yellow-400 mt-1">
                  Candidates who apply via LinkedIn get reviewed 0.3 seconds faster before being
                  rejected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobVoid
