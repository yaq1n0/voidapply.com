import { useState } from 'react'
import type { AtsSkinProps } from '@/types'
import { TextInput } from '@/components/shared/TextInput'
import { TextArea } from '@/components/shared/TextArea'
import { FileUpload } from '@/components/shared/FileUpload'
import { SelectInput } from '@/components/shared/SelectInput'

function LeverToNowhere({ job, company, onSubmit }: AtsSkinProps) {
  const [additionalExpanded, setAdditionalExpanded] = useState(true)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Top nav bar */}
      <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-6 py-3">
        <span className="font-bold text-[#5b2be0] text-lg tracking-tight">LeverToNowhere&trade;</span>
        <span className="text-xs text-gray-400 ml-2">Powered by AI synergy</span>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 lg:flex lg:gap-8">
        {/* Left sidebar */}
        <aside className="lg:w-1/3 lg:sticky lg:top-8 lg:self-start mb-8 lg:mb-0">
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium mb-1">
              {company.name}
            </p>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {job.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs px-2 py-1 rounded-full">
                {job.location}
              </span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs px-2 py-1 rounded-full">
                {job.type}
              </span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs px-2 py-1 rounded-full">
                {job.salary}
              </span>
            </div>
            <hr className="border-gray-200 dark:border-gray-700 mb-4" />
            <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {job.description}
            </div>
            <hr className="border-gray-200 dark:border-gray-700 mt-4" />
          </div>
        </aside>

        {/* Right column: form */}
        <div className="lg:w-2/3">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              onSubmit()
            }}
            className="space-y-6"
          >
            {/* Basic Info */}
            <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Basic Information
              </h2>
              <div className="space-y-4">
                <TextInput label="Full Name" required />
                <TextInput label="Email Address" required type="email" />
                <TextInput label="Phone Number" type="tel" />
                <FileUpload label="Resume" required />
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Social Profiles
              </h2>
              <div className="space-y-4">
                <TextInput label="LinkedIn URL" placeholder="https://linkedin.com/in/..." />
                <TextInput label="GitHub URL" placeholder="https://github.com/..." />
                <TextInput label="Portfolio / Website" placeholder="https://..." />
              </div>
            </div>

            {/* Additional Information accordion */}
            <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
              <button
                type="button"
                onClick={() => setAdditionalExpanded(!additionalExpanded)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <div>
                  <span className="text-base font-semibold text-gray-900 dark:text-gray-100">
                    Additional Information
                  </span>
                  <span className="ml-2 text-xs text-gray-400 dark:text-gray-500">
                    (Optional &mdash; only 47 fields)
                  </span>
                </div>
                <span className="text-[#5b2be0] font-bold text-lg leading-none">
                  {additionalExpanded ? '−' : '+'}
                </span>
              </button>

              {additionalExpanded && (
                <div className="px-6 pb-6 space-y-4 border-t border-gray-100 dark:border-gray-800 pt-4">
                  <TextInput label="Current Salary" placeholder="We'll offer less regardless" />
                  <TextInput label="Expected Salary" placeholder="Your number, minus 20%" />
                  <SelectInput
                    label="Work Authorization Status"
                    options={[
                      { value: 'citizen', label: 'Citizen' },
                      { value: 'pr', label: 'Permanent Resident' },
                      { value: 'visa', label: 'Visa (we will not sponsor)' },
                      { value: 'other', label: 'Other (disqualified)' },
                    ]}
                  />
                  <SelectInput
                    label="Willing to Relocate?"
                    options={[
                      { value: 'yes', label: 'Yes — I have no attachments' },
                      { value: 'no', label: 'No — I have a life' },
                      { value: 'maybe', label: "Maybe — depends on the compensation (it won't be enough)" },
                    ]}
                  />
                  <TextInput label="Pronouns" placeholder="Entirely optional but we will note it" />
                  <TextInput label="Emergency Contact Name" placeholder="Someone who will miss you" />
                  <TextInput
                    label="Emergency Contact Phone"
                    placeholder="In case we overwork you"
                    type="tel"
                  />
                  <SelectInput
                    label="How did you hear about us?"
                    options={[
                      { value: 'linkedin', label: "LinkedIn (where hope goes to die)" },
                      { value: 'referral', label: 'Referral (still won\'t help)' },
                      { value: 'glassdoor', label: 'Glassdoor (you read the reviews and applied anyway?)' },
                      { value: 'dream', label: 'It came to me in a fever dream' },
                    ]}
                  />
                  <TextArea
                    label="What excites you about this role?"
                    rows={3}
                    placeholder="Please do not say 'the opportunity to grow'"
                  />
                  <TextArea
                    label="Describe your work style"
                    rows={3}
                    placeholder="'I'm a self-starter' is already taken by 12,000 other applicants"
                  />
                  <SelectInput
                    label="Myers-Briggs Personality Type"
                    options={[
                      { value: 'intj', label: 'INTJ — The Architect of Rejection' },
                      { value: 'enfp', label: 'ENFP — Enthusiastically unemployed' },
                      { value: 'istj', label: 'ISTJ — Will format their resume correctly' },
                      { value: 'infp', label: 'INFP — Applied to find meaning' },
                      { value: 'other', label: 'Other — we hired an astrologist to interpret' },
                    ]}
                  />
                  <SelectInput
                    label="Preferred IDE"
                    options={[
                      { value: 'vscode', label: 'VS Code (acceptable)' },
                      { value: 'vim', label: 'Vim (will mention it in every standup)' },
                      { value: 'emacs', label: 'Emacs (we are concerned)' },
                      { value: 'notepad', label: 'Notepad (interview cancelled)' },
                      { value: 'cursor', label: 'Cursor — just let the AI do it' },
                    ]}
                  />
                  <TextInput label="Years of Experience in React" placeholder="e.g. 5 (we want 10)" />
                  <TextInput label="Years of Experience in TypeScript" placeholder="e.g. 3 (we want 8)" />
                  <TextInput
                    label="Years of Experience in Kubernetes"
                    placeholder="We put this here to scare you"
                  />
                  <SelectInput
                    label="Favorite Programming Language"
                    options={[
                      { value: 'js', label: 'JavaScript (chaotic but relatable)' },
                      { value: 'python', label: 'Python (we use Python 2 internally)' },
                      { value: 'rust', label: 'Rust (please calm down)' },
                      { value: 'cobol', label: 'COBOL (you are exactly who we need)' },
                      { value: 'php', label: 'PHP (bold choice, no comment)' },
                    ]}
                  />
                </div>
              )}
            </div>

            {/* Voluntary Self-Identification */}
            <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
                Voluntary Self-Identification
              </h2>
              <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">
                Completing this section is entirely optional and will have absolutely no bearing on
                our decision. (Required.)
              </p>
              <div className="space-y-4">
                <SelectInput
                  label="Gender Identity"
                  options={[
                    { value: 'male', label: 'Male' },
                    { value: 'female', label: 'Female' },
                    { value: 'non-binary', label: 'Non-binary' },
                    { value: 'prefer-not', label: 'Prefer not to say (we will guess)' },
                  ]}
                />
                <SelectInput
                  label="Veteran Status"
                  options={[
                    { value: 'veteran', label: 'Protected Veteran' },
                    { value: 'not-veteran', label: 'Not a Veteran' },
                    { value: 'prefer-not', label: 'I decline to self-identify' },
                  ]}
                />
                <SelectInput
                  label="Disability Status"
                  options={[
                    { value: 'yes', label: 'Yes, I have a disability' },
                    { value: 'no', label: 'No disability' },
                    {
                      value: 'prefer-not',
                      label: "I don't wish to answer",
                    },
                  ]}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#5b2be0] hover:bg-[#4a22c0] text-white font-semibold rounded-lg text-sm transition-colors"
            >
              Submit Application
            </button>

            <p className="text-xs text-gray-400 dark:text-gray-500 text-center pb-4">
              LeverToNowhere&trade; &mdash; moving your application to a better place (the archive folder).
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LeverToNowhere
