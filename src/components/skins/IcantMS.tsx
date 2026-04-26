import { useState, useEffect } from 'react'
import type { AtsSkinProps } from '@/types'
import { TextInput } from '@/components/shared/TextInput'
import { TextArea } from '@/components/shared/TextArea'
import { FileUpload } from '@/components/shared/FileUpload'
import { SelectInput } from '@/components/shared/SelectInput'

function IcantMS({ job, company, onSubmit }: AtsSkinProps) {
  const [step, setStep] = useState(1)
  const [certified, setCertified] = useState(false)
  const [parsing, setParsing] = useState(false)
  const [parsed, setParsed] = useState(false)
  const [skills, setSkills] = useState<string[]>([])
  const [skillInput, setSkillInput] = useState('')
  const [timeLeft, setTimeLeft] = useState(19 * 60 + 47)

  useEffect(() => {
    const t = setInterval(() => setTimeLeft((s) => Math.max(0, s - 1)), 1000)
    return () => clearInterval(t)
  }, [])

  const mins = Math.floor(timeLeft / 60)
  const secs = timeLeft % 60

  const TOTAL_STEPS = 9

  const handleResumeUpload = () => {
    setParsing(true)
    setTimeout(() => {
      setParsing(false)
      setParsed(true)
    }, 3000)
  }

  const addSkill = () => {
    if (skillInput.trim()) {
      setSkills((s) => [...s, skillInput.trim()])
      setSkillInput('')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < TOTAL_STEPS) {
      setStep((s) => s + 1)
    } else {
      onSubmit()
    }
  }

  const stepLabels = [
    'Account',
    'Personal',
    'Resume',
    'Work Exp.',
    'Education',
    'Skills',
    'Questions',
    'EEO',
    'E-Sign',
  ]

  return (
    <div className="min-h-screen bg-[#f4f4f4] dark:bg-gray-950 pb-16">
      {/* Primary Nav Bar */}
      <div className="bg-[#0066cc] text-white">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="font-bold text-lg tracking-tight">iCIMS</span>
            <span className="text-blue-200 text-sm hidden md:block">{company.name}</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-blue-100">
            <span className="cursor-default">Careers</span>
            <span className="cursor-default">My Applications</span>
            <span className="cursor-default">My Profile</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-yellow-300 font-mono text-xs">
              Session Timeout:{' '}
              <span className={timeLeft < 60 ? 'text-red-300 animate-pulse' : ''}>
                {mins}:{secs.toString().padStart(2, '0')}
              </span>
            </span>
            <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-xs font-bold border-2 border-blue-200">
              U
            </div>
          </div>
        </div>

        {/* Secondary Nav */}
        <div className="bg-[#004a99] border-t border-blue-700">
          <div className="max-w-5xl mx-auto px-4 py-2 flex gap-6 text-xs text-blue-200">
            <span className="cursor-default hover:text-white">Job Search</span>
            <span className="cursor-default hover:text-white">My Applications</span>
            <span className="cursor-default hover:text-white">My Profile</span>
          </div>
        </div>
      </div>

      {/* Page Title */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Apply: {job.title}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {company.name} &mdash; Req # <span className="font-mono">REQ-2024-847291-A</span>
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Step Breadcrumb */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-6 overflow-x-auto">
          <div className="flex items-center gap-1 min-w-max">
            {stepLabels.map((label, i) => {
              const num = i + 1
              const isActive = num === step
              const isComplete = num < step
              return (
                <div key={num} className="flex items-center">
                  <button
                    type="button"
                    onClick={() => num < step && setStep(num)}
                    className={`flex flex-col items-center px-3 py-2 rounded text-xs font-medium transition-colors min-w-[64px] ${
                      isActive
                        ? 'bg-[#0066cc] text-white'
                        : isComplete
                          ? 'text-[#0066cc] dark:text-blue-400 cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20'
                          : 'text-gray-400 dark:text-gray-600 cursor-default'
                    }`}
                  >
                    <span className="text-sm font-bold">{isComplete ? '✓' : num}</span>
                    <span className="mt-0.5 leading-tight text-center">{label}</span>
                  </button>
                  {i < TOTAL_STEPS - 1 && (
                    <div
                      className={`w-6 h-0.5 mx-0.5 ${num < step ? 'bg-[#0066cc]' : 'bg-gray-200 dark:bg-gray-700'}`}
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="p-6 space-y-5">
              {/* Step 1: Account Registration */}
              {step === 1 && (
                <>
                  <div>
                    <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Step 1: Account Registration
                    </h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                      Please create an account to save your application progress. You will need to
                      log in each time you return.
                    </p>
                  </div>
                  <TextInput label="Email Address" required type="email" />
                  <div>
                    <TextInput
                      label="Password"
                      required
                      type="password"
                      placeholder="Create a password"
                    />
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                      Password must be 8–16 characters and contain an uppercase letter, a number,
                      and a special symbol.
                    </p>
                  </div>
                  <TextInput
                    label="Confirm Password"
                    required
                    type="password"
                    placeholder="Re-enter password"
                  />
                  <SelectInput
                    label="Security Question"
                    required
                    options={[
                      {
                        value: 'pet',
                        label: 'What was the name of your first pet?',
                      },
                      {
                        value: 'street',
                        label: 'What street did you grow up on?',
                      },
                      {
                        value: 'school',
                        label: 'What was the name of your elementary school?',
                      },
                      {
                        value: 'mother',
                        label: "What is your mother's maiden name?",
                      },
                    ]}
                  />
                  <TextInput label="Security Answer" required placeholder="Enter your answer" />
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded p-3 text-xs text-yellow-800 dark:text-yellow-300">
                    <strong>Note:</strong> Your account will be locked after 3 failed login
                    attempts. To unlock, call 1-800-555-ICIMS during business hours (EST only).
                    Average hold time: 47 minutes.
                  </div>
                </>
              )}

              {/* Step 2: Personal Information */}
              {step === 2 && (
                <>
                  <div>
                    <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Step 2: Personal Information
                    </h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                      All fields marked with * are required.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TextInput label="First Name" required />
                    <TextInput label="Last Name" required />
                  </div>
                  <TextInput label="Phone Number" required type="tel" />
                  <TextInput label="Street Address" required />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TextInput label="City" required />
                    <SelectInput
                      label="State"
                      required
                      options={[
                        { value: 'AL', label: 'Alabama' },
                        { value: 'AK', label: 'Alaska' },
                        { value: 'AZ', label: 'Arizona' },
                        { value: 'CA', label: 'California' },
                        { value: 'CO', label: 'Colorado' },
                        { value: 'FL', label: 'Florida' },
                        { value: 'GA', label: 'Georgia' },
                        { value: 'IL', label: 'Illinois' },
                        { value: 'NY', label: 'New York' },
                        { value: 'TX', label: 'Texas' },
                        { value: 'WA', label: 'Washington' },
                        { value: 'other', label: 'Other' },
                      ]}
                    />
                  </div>
                  <TextInput label="ZIP Code" required />
                </>
              )}

              {/* Step 3: Resume Upload */}
              {step === 3 && (
                <>
                  <div>
                    <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Step 3: Resume Upload
                    </h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                      Upload your resume. Our AI will automatically parse and populate your
                      information.
                    </p>
                  </div>

                  <div onClick={handleResumeUpload}>
                    <FileUpload label="Resume (PDF, DOC, DOCX — Max 5MB)" required />
                  </div>

                  {parsing && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded p-4 flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-[#0066cc] border-t-transparent rounded-full animate-spin flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-[#0066cc] dark:text-blue-400">
                          AI Resume Parser™ is analyzing your document...
                        </p>
                        <p className="text-xs text-blue-600 dark:text-blue-500 mt-0.5">
                          Extracting work history, education, skills, and contact info...
                        </p>
                      </div>
                    </div>
                  )}

                  {parsed && (
                    <>
                      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded p-3 text-sm text-green-800 dark:text-green-300 flex items-center gap-2">
                        <span>✓</span>
                        <span>AI parsing complete.</span>
                      </div>
                      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded p-4 text-sm text-red-800 dark:text-red-300">
                        <p className="font-semibold mb-1">
                          AI parsing complete. 0 fields populated.
                        </p>
                        <p>Please re-enter your resume manually. All fields below are required.</p>
                      </div>
                      <TextInput label="Full Name (from resume)" required />
                      <TextInput label="Email (from resume)" required type="email" />
                      <TextInput label="Phone (from resume)" required type="tel" />
                      <TextInput label="Current Job Title (from resume)" required />
                      <TextInput label="Years of Experience (from resume)" required />
                    </>
                  )}
                </>
              )}

              {/* Step 4: Work Experience */}
              {step === 4 && (
                <>
                  <div>
                    <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Step 4: Work Experience
                    </h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                      Enter your most recent position. You will be able to add additional positions
                      on the next page. (There is no next page.)
                    </p>
                  </div>
                  <TextInput label="Current / Most Recent Employer" required />
                  <TextInput label="Job Title" required />
                  <div className="grid grid-cols-2 gap-4">
                    <SelectInput
                      label="Start Month"
                      required
                      options={[
                        { value: '01', label: 'January' },
                        { value: '02', label: 'February' },
                        { value: '03', label: 'March' },
                        { value: '04', label: 'April' },
                        { value: '05', label: 'May' },
                        { value: '06', label: 'June' },
                        { value: '07', label: 'July' },
                        { value: '08', label: 'August' },
                        { value: '09', label: 'September' },
                        { value: '10', label: 'October' },
                        { value: '11', label: 'November' },
                        { value: '12', label: 'December' },
                      ]}
                    />
                    <SelectInput
                      label="Start Year"
                      required
                      options={Array.from({ length: 30 }, (_, i) => ({
                        value: String(2024 - i),
                        label: String(2024 - i),
                      }))}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <SelectInput
                      label="End Month"
                      required
                      options={[
                        { value: 'present', label: 'Present' },
                        { value: '01', label: 'January' },
                        { value: '02', label: 'February' },
                        { value: '03', label: 'March' },
                        { value: '04', label: 'April' },
                        { value: '05', label: 'May' },
                        { value: '06', label: 'June' },
                        { value: '07', label: 'July' },
                        { value: '08', label: 'August' },
                        { value: '09', label: 'September' },
                        { value: '10', label: 'October' },
                        { value: '11', label: 'November' },
                        { value: '12', label: 'December' },
                      ]}
                    />
                    <SelectInput
                      label="End Year"
                      required
                      options={[
                        { value: 'present', label: 'Present' },
                        ...Array.from({ length: 30 }, (_, i) => ({
                          value: String(2025 - i),
                          label: String(2025 - i),
                        })),
                      ]}
                    />
                  </div>
                  <TextArea label="Job Duties and Responsibilities" required rows={4} />
                  <TextInput label="Reason for Leaving" placeholder="Do not say 'salary'" />
                </>
              )}

              {/* Step 5: Education */}
              {step === 5 && (
                <>
                  <div>
                    <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Step 5: Education
                    </h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                      Enter your highest level of education. GPA is required even for degrees
                      obtained 25+ years ago.
                    </p>
                  </div>
                  <SelectInput
                    label="Degree Type"
                    required
                    options={[
                      { value: 'hs', label: 'High School Diploma / GED' },
                      { value: 'aa', label: "Associate's Degree" },
                      { value: 'ba', label: "Bachelor's Degree" },
                      { value: 'ma', label: "Master's Degree" },
                      { value: 'phd', label: 'Ph.D.' },
                      { value: 'jd', label: 'J.D.' },
                      { value: 'md', label: 'M.D.' },
                      { value: 'none', label: 'No formal education (field auto-fails)' },
                    ]}
                  />
                  <TextInput label="Field of Study / Major" required />
                  <TextInput label="Institution Name" required />
                  <SelectInput
                    label="Graduation Year"
                    required
                    options={Array.from({ length: 50 }, (_, i) => ({
                      value: String(2025 - i),
                      label: String(2025 - i),
                    }))}
                  />
                  <TextInput label="GPA (on a 4.0 scale)" required placeholder="e.g., 3.82" />
                  <div className="text-xs text-gray-400 dark:text-gray-500 -mt-2">
                    Note: GPA verification may be conducted. Rounding up is considered
                    falsification.
                  </div>
                </>
              )}

              {/* Step 6: Skills and Certifications */}
              {step === 6 && (
                <>
                  <div>
                    <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Step 6: Skills &amp; Certifications
                    </h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                      Add each skill individually. Copying and pasting a list does not work.
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Skill or Certification
                      </label>
                      <input
                        type="text"
                        value={skillInput}
                        onChange={(e) => setSkillInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                        placeholder="e.g., Microsoft Excel"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#0066cc] focus:border-transparent text-sm"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={addSkill}
                      className="self-end px-4 py-2 bg-[#0066cc] hover:bg-[#0052a3] text-white text-sm rounded-md"
                    >
                      Add
                    </button>
                  </div>

                  {skills.length > 0 ? (
                    <div className="border border-gray-200 dark:border-gray-700 rounded-md divide-y divide-gray-100 dark:divide-gray-800">
                      {skills.map((skill, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between px-3 py-2 text-sm text-gray-800 dark:text-gray-200"
                        >
                          <span>{skill}</span>
                          <button
                            type="button"
                            onClick={() => setSkills((s) => s.filter((_, idx) => idx !== i))}
                            className="text-red-400 hover:text-red-600 text-xs ml-2"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-gray-400 dark:text-gray-500 italic">
                      No skills added yet. Minimum 3 skills required to proceed.
                    </p>
                  )}

                  <TextArea
                    label="Certifications (list each on a separate line, even though this is a text area and we'll parse it incorrectly)"
                    rows={3}
                  />
                </>
              )}

              {/* Step 7: Application Questions */}
              {step === 7 && (
                <>
                  <div>
                    <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Step 7: Application Questions
                    </h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                      Please answer all questions thoughtfully. Word limits are enforced. Character
                      limits are not disclosed.
                    </p>
                  </div>
                  <TextArea
                    label="In your own words, and without using the word 'passionate', describe why you are passionate about this role at a company whose product you have never used."
                    required
                    rows={5}
                  />
                  <TextArea
                    label="Describe a time when you proactively identified a problem before it existed. How did resolving a non-existent problem impact your team's synergy?"
                    required
                    rows={5}
                  />
                  <TextArea
                    label="If hired, how would you leverage cross-functional stakeholder alignment to drive holistic value-add outcomes in a fast-paced, ambiguous, results-oriented environment?"
                    required
                    rows={5}
                  />
                </>
              )}

              {/* Step 8: EEO / Voluntary Disclosure */}
              {step === 8 && (
                <>
                  <div>
                    <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Step 8: EEO / Voluntary Self-Identification
                    </h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      Completion of this form is voluntary and will not affect your application.
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-600 mb-4">
                      (It is marked required.)
                    </p>
                  </div>
                  <SelectInput
                    label="Race / Ethnicity"
                    required
                    options={[
                      { value: 'prefer-not', label: 'Prefer not to disclose' },
                      {
                        value: 'american-indian',
                        label: 'American Indian or Alaska Native',
                      },
                      { value: 'asian', label: 'Asian' },
                      {
                        value: 'black',
                        label: 'Black or African American',
                      },
                      {
                        value: 'hispanic',
                        label: 'Hispanic or Latino',
                      },
                      {
                        value: 'native-hawaiian',
                        label: 'Native Hawaiian or Other Pacific Islander',
                      },
                      { value: 'two-or-more', label: 'Two or More Races' },
                      { value: 'white', label: 'White' },
                    ]}
                  />
                  <SelectInput
                    label="Gender"
                    required
                    options={[
                      { value: 'prefer-not', label: 'Prefer not to disclose' },
                      { value: 'male', label: 'Male' },
                      { value: 'female', label: 'Female' },
                      { value: 'nonbinary', label: 'Non-binary / Third gender' },
                    ]}
                  />
                  <SelectInput
                    label="Veteran Status"
                    required
                    options={[
                      { value: 'prefer-not', label: 'Prefer not to disclose' },
                      {
                        value: 'not-veteran',
                        label: 'I am not a protected veteran',
                      },
                      {
                        value: 'veteran',
                        label: 'I identify as a protected veteran',
                      },
                    ]}
                  />
                  <SelectInput
                    label="Disability Status"
                    required
                    options={[
                      { value: 'prefer-not', label: 'Prefer not to disclose' },
                      {
                        value: 'no',
                        label: 'I do not have a disability',
                      },
                      {
                        value: 'yes',
                        label: 'I have a disability or have a history of having a disability',
                      },
                    ]}
                  />
                </>
              )}

              {/* Step 9: E-Sign and Submit */}
              {step === 9 && (
                <>
                  <div>
                    <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Step 9: E-Sign &amp; Submit
                    </h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                      Please review your application before submitting. Requisition:{' '}
                      <span className="font-mono">REQ-2024-847291-A</span>
                    </p>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded p-3 flex items-start gap-2 text-sm text-red-800 dark:text-red-300">
                    <span className="text-red-500 mt-0.5 flex-shrink-0">⚠</span>
                    <span>
                      Please correct errors before continuing. (No errors have been detected.)
                    </span>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded p-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Position</span>
                      <span className="font-medium">{job.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Company</span>
                      <span className="font-medium">{company.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Requisition</span>
                      <span className="font-mono font-medium">REQ-2024-847291-A</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Application Status</span>
                      <span className="text-yellow-600 dark:text-yellow-400 font-medium">
                        Incomplete (all steps completed)
                      </span>
                    </div>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-700 rounded p-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={certified}
                        onChange={(e) => setCertified(e.target.checked)}
                        className="mt-0.5 w-4 h-4 accent-[#0066cc]"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        I certify that all information provided in this application is accurate,
                        complete, and true to the best of my knowledge. I understand that any
                        misrepresentation may result in disqualification or termination. I also
                        acknowledge that submitting this application does not guarantee that anyone
                        will read it.
                      </span>
                    </label>
                  </div>

                  <div className="text-xs text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-800 rounded p-3 leading-relaxed">
                    By clicking Submit, you agree to our Terms of Service (47 pages), Privacy Policy
                    (23 pages), Cookie Policy (8 pages), Arbitration Agreement (12 pages), and
                    consent to be contacted by our talent acquisition team via any and all channels
                    including but not limited to email, phone, fax, and carrier pigeon.
                  </div>
                </>
              )}
            </div>

            {/* Footer Navigation */}
            <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 rounded-b-lg flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(1, s - 1))}
                disabled={step === 1}
                className="px-5 py-2 border border-gray-300 dark:border-gray-600 rounded text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                &larr; Previous
              </button>

              <span className="text-xs text-gray-400 dark:text-gray-600">
                Step {step} of {TOTAL_STEPS}
              </span>

              {step < TOTAL_STEPS ? (
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#0066cc] hover:bg-[#0052a3] text-white text-sm font-medium rounded"
                >
                  Save &amp; Continue &rarr;
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!certified}
                  className={`px-6 py-2 text-white text-sm font-medium rounded transition-opacity ${
                    certified
                      ? 'bg-[#0066cc] hover:bg-[#0052a3]'
                      : 'bg-[#0066cc] opacity-50 cursor-not-allowed'
                  }`}
                >
                  Submit Application
                </button>
              )}
            </div>
          </form>
        </div>

        <p className="text-xs text-gray-300 dark:text-gray-700 text-center mt-4">
          Powered by iCIMS Talent Cloud&trade; &mdash; Enterprise Hiring Since 2000 &mdash; Average
          applicant completion time: 73 minutes
        </p>
      </div>
    </div>
  )
}

export default IcantMS
