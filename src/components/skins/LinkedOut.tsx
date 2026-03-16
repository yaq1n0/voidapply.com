import { useState, useEffect } from 'react'
import type { AtsSkinProps } from '@/types'
import { TextInput } from '@/components/shared/TextInput'
import { TextArea } from '@/components/shared/TextArea'
import { FileUpload } from '@/components/shared/FileUpload'
import { SelectInput } from '@/components/shared/SelectInput'

const STEPS = [
  'Contact Info',
  'Resume',
  'Screening Questions',
  'Work Authorization',
  'Additional Questions',
  'Review',
  'Submit',
]

function LinkedOut({ job, company, onSubmit }: AtsSkinProps) {
  const [step, setStep] = useState(0)
  const [applicants, setApplicants] = useState(1248)
  const [totalSteps, setTotalSteps] = useState(7)
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setApplicants(1249), 1000)
    return () => clearTimeout(t)
  }, [])

  // When user reaches step 4 (0-indexed), bump total from 7 to 8
  useEffect(() => {
    if (step === 3) {
      setTotalSteps(8)
    }
  }, [step])

  const next = () => {
    if (step < STEPS.length - 1) {
      setStep(step + 1)
    } else {
      // Final submit
      setShowToast(true)
      setTimeout(() => {
        setShowToast(false)
        onSubmit()
      }, 3000)
    }
  }

  const prev = () => {
    if (step > 0) setStep(step - 1)
  }

  const progressPct = ((step + 1) / totalSteps) * 100

  return (
    <div className="min-h-screen bg-[#f3f2ef] dark:bg-gray-900">
      {/* LinkedIn-style nav bar */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded flex items-center justify-center bg-[#0a66c2]">
          <span className="text-white font-bold text-xs">in</span>
        </div>
        <span className="text-gray-500 dark:text-gray-400 text-sm font-semibold tracking-wide">
          LinkedOut&trade;
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Job Details */}
        <div className="lg:col-span-2">
          {/* Company banner */}
          <div className="bg-[#0a66c2] h-24 rounded-t-xl relative" />
          <div className="bg-white dark:bg-gray-800 rounded-b-xl shadow-sm border border-gray-200 dark:border-gray-700 px-6 pb-6">
            {/* Logo placeholder */}
            <div className="w-16 h-16 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-lg -mt-8 flex items-center justify-center mb-3">
              <span className="text-2xl font-bold text-[#0a66c2]">
                {company.name.charAt(0)}
              </span>
            </div>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  {job.title}
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {company.name} &middot; {job.location} &middot; {job.type}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  {applicants.toLocaleString()} applicants &middot;{' '}
                  <span className="text-amber-600 dark:text-amber-400">
                    This listing was posted 847 days ago.
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#0a66c2] text-white rounded-full text-sm font-semibold cursor-default select-none">
                <span>&#9889;</span> Easy Apply
              </div>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
              (Easy Apply: 47 questions across {totalSteps} steps)
            </p>

            <hr className="my-4 border-gray-200 dark:border-gray-700" />

            <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              <h2 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                About the role
              </h2>
              <p className="line-clamp-6 whitespace-pre-line">
                {job.description.slice(0, 600)}
                {job.description.length > 600 && (
                  <span className="text-[#0a66c2] cursor-pointer"> ...see more</span>
                )}
              </p>
            </div>

            {job.requirements.length > 0 && (
              <>
                <hr className="my-4 border-gray-200 dark:border-gray-700" />
                <div>
                  <h2 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-sm">
                    Requirements
                  </h2>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    {job.requirements.slice(0, 5).map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right: Easy Apply Panel */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 sticky top-6">
            {/* Panel header */}
            <div className="px-5 pt-5 pb-3 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  &#9889; Easy Apply
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Step {step + 1} of {totalSteps}
                  {step >= 3 && (
                    <span className="text-amber-500 ml-1">(we added one)</span>
                  )}
                </span>
              </div>
              {/* Progress bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-2">
                <div
                  className="bg-[#0a66c2] h-1.5 rounded-full transition-all duration-500"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                {STEPS[step]}
              </p>
            </div>

            {/* Step content */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                next()
              }}
              className="px-5 py-4 space-y-4"
            >
              {step === 0 && (
                <>
                  <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Contact Info
                  </h3>
                  <TextInput label="First Name" required />
                  <TextInput label="Last Name" required />
                  <TextInput label="Email" required type="email" />
                  <TextInput label="Phone" type="tel" />
                </>
              )}

              {step === 1 && (
                <>
                  <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Resume
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Upload your resume. We will not read it but our ATS will reject it.
                  </p>
                  <FileUpload label="Resume / CV" required />
                  <FileUpload label="Cover Letter (optional, will be ignored)" />
                </>
              )}

              {step === 2 && (
                <>
                  <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Screening Questions
                  </h3>
                  <SelectInput
                    label="Are you legally authorized to work in this country?"
                    required
                    options={[
                      { value: 'yes', label: 'Yes' },
                      { value: 'no', label: 'No' },
                      { value: 'depends', label: "It's complicated" },
                    ]}
                  />
                  <SelectInput
                    label="Do you require sponsorship now or in the future?"
                    required
                    options={[
                      { value: 'no', label: 'No' },
                      { value: 'yes', label: 'Yes' },
                      { value: 'maybe', label: 'Possibly' },
                    ]}
                  />
                  <TextInput
                    label="How many years of experience do you have with the role?"
                    required
                    placeholder="Enter a number"
                    type="number"
                  />
                </>
              )}

              {step === 3 && (
                <>
                  <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Work Authorization
                  </h3>
                  <SelectInput
                    label="Citizenship status"
                    required
                    options={[
                      { value: 'citizen', label: 'US Citizen' },
                      { value: 'pr', label: 'Permanent Resident' },
                      { value: 'visa', label: 'Visa Holder' },
                      { value: 'other', label: 'Other' },
                    ]}
                  />
                  <SelectInput
                    label="Current visa type (if applicable)"
                    options={[
                      { value: 'h1b', label: 'H-1B' },
                      { value: 'opt', label: 'OPT/STEM OPT' },
                      { value: 'l1', label: 'L-1' },
                      { value: 'na', label: 'Not applicable' },
                    ]}
                  />
                  <TextInput
                    label="Visa expiration date (if applicable)"
                    type="date"
                  />
                  <p className="text-xs text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded p-2">
                    Heads up: we just added a new step. You now have {totalSteps} total steps.
                  </p>
                </>
              )}

              {step === 4 && (
                <>
                  <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Additional Questions
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Only 10 questions. Totally easy.
                  </p>
                  <TextInput
                    label="What are your salary expectations?"
                    required
                    placeholder="e.g. $80,000 – $120,000"
                  />
                  <TextInput
                    label="Years of experience with JavaScript?"
                    required
                    type="number"
                  />
                  <TextInput
                    label="Years of experience with TypeScript?"
                    required
                    type="number"
                  />
                  <TextInput
                    label="Years of experience with React?"
                    required
                    type="number"
                  />
                  <TextInput
                    label="Years of experience with Node.js?"
                    required
                    type="number"
                  />
                  <TextInput
                    label="Years of experience with SQL?"
                    required
                    type="number"
                  />
                  <SelectInput
                    label="Are you willing to relocate?"
                    required
                    options={[
                      { value: 'yes', label: 'Yes' },
                      { value: 'no', label: 'No' },
                      {
                        value: 'depends',
                        label: 'Depends on compensation (rejected immediately)',
                      },
                    ]}
                  />
                  <SelectInput
                    label="Are you comfortable working 60+ hours per week?"
                    required
                    options={[
                      { value: 'yes', label: 'Absolutely' },
                      { value: 'no', label: 'No' },
                      { value: 'sometimes', label: 'When needed (= always)' },
                    ]}
                  />
                  <TextInput
                    label="Expected start date"
                    required
                    type="date"
                  />
                  <TextArea
                    label="Is there anything else you'd like us to know? (We won't read this.)"
                    rows={3}
                  />
                </>
              )}

              {step === 5 && (
                <>
                  <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Review
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Please review the information you've entered. It will be ignored
                    regardless.
                  </p>
                  <div className="bg-[#f3f2ef] dark:bg-gray-700 rounded-lg p-3 text-xs text-gray-600 dark:text-gray-300 space-y-1">
                    <p>
                      <span className="font-medium">Applying to:</span> {job.title}
                    </p>
                    <p>
                      <span className="font-medium">Company:</span> {company.name}
                    </p>
                    <p>
                      <span className="font-medium">Location:</span> {job.location}
                    </p>
                    <p>
                      <span className="font-medium">Posted:</span>{' '}
                      <span className="text-amber-600 dark:text-amber-400">
                        847 days ago
                      </span>
                    </p>
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">
                    By clicking Next, you agree that your data will be stored for 99 years
                    and reviewed never.
                  </div>
                </>
              )}

              {step === 6 && (
                <>
                  <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Final Step
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    You've completed all {totalSteps} steps. You did it. Or did you?
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-3 text-xs text-blue-800 dark:text-blue-200">
                    This job was posted 847 days ago. The position may have already been
                    filled, cancelled, or forgotten entirely. Good luck!
                  </div>
                  <SelectInput
                    label="How did you hear about this role?"
                    options={[
                      { value: 'linkedin', label: 'LinkedIn (obviously)' },
                      { value: 'referral', label: 'Employee referral (instant rejection)' },
                      { value: 'dream', label: 'A fever dream' },
                      { value: 'void', label: 'The void' },
                    ]}
                  />
                </>
              )}

              {/* Navigation */}
              <div className="flex justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                <button
                  type="button"
                  onClick={prev}
                  disabled={step === 0}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-sm font-semibold text-white bg-[#0a66c2] hover:bg-[#004182] rounded-full"
                >
                  {step === STEPS.length - 1 ? 'Submit Application' : 'Next'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Toast notification */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-gray-900 dark:bg-gray-700 text-white text-sm px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 animate-pulse">
          <span className="text-green-400">&#10003;</span>
          <span>
            Application sent!{' '}
            <span className="text-amber-300">
              This listing was posted 847 days ago.
            </span>
          </span>
        </div>
      )}
    </div>
  )
}

export default LinkedOut
