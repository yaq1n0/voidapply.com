import type { AtsSkinProps } from '@/types'
import { TextInput } from '@/components/shared/TextInput'
import { TextArea } from '@/components/shared/TextArea'
import { FileUpload } from '@/components/shared/FileUpload'
import { SelectInput } from '@/components/shared/SelectInput'

function Rejectable({ job, company, onSubmit }: AtsSkinProps) {
  const initials = company.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className="min-h-screen bg-[#f7f7f7] dark:bg-gray-950 pb-16">
      {/* Header card */}
      <div className="max-w-2xl mx-auto px-4 pt-8">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-4">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-md flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
              style={{ backgroundColor: '#ff4940' }}
            >
              {initials}
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium">
                {company.name}
              </p>
              <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">{job.title}</h1>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                3,847 people applied &mdash; good luck!
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200">
              Apply for this position
            </h2>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              {job.location} &bull; {job.type} &bull; {job.salary}
            </p>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            onSubmit()
          }}
          className="space-y-4"
        >
          {/* Section 1: Personal Details */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-4">
              Personal Details
            </h3>
            <div className="space-y-4">
              <TextInput label="Full Name" required />
              <TextInput label="Email Address" required type="email" />
              <TextInput label="Phone Number" type="tel" />
              <TextInput label="Current Company" placeholder="Where you're currently miserable" />
              <TextInput label="Current Job Title" placeholder="Your soon-to-be former title" />
            </div>
          </div>

          {/* Section 2: Resume */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-4">
              Resume
            </h3>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center mb-3">
              <FileUpload label="Upload your resume" required />
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                PDF or Word, max 5MB &mdash; our ATS will strip all formatting anyway
              </p>
            </div>
          </div>

          {/* Section 3: Cover Letter */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-4">
              Cover Letter
            </h3>
            <TextArea
              label="Cover Letter"
              rows={6}
              placeholder="Dear Hiring Manager, (they will not read this)"
            />
          </div>

          {/* Section 4: Profile Links */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-4">
              Profile Links
            </h3>
            <div className="space-y-4">
              <TextInput label="LinkedIn URL" placeholder="https://linkedin.com/in/your-profile" />
              <TextInput label="GitHub URL" placeholder="https://github.com/your-username" />
              <TextInput
                label="Portfolio / Website"
                placeholder="https://yoursite.com (optional but judged)"
              />
            </div>
          </div>

          {/* Section 5: Screening Questions */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-1">
              Screening Questions
            </h3>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">
              These questions have no bearing on hiring. We're just curious.
            </p>
            <div className="space-y-4">
              <SelectInput
                label="Do you have 15+ years of experience in a technology invented 3 years ago?"
                required
                options={[
                  { value: 'yes', label: 'Yes — I am a time traveler' },
                  { value: 'no', label: 'No — I respect the laws of physics' },
                ]}
              />
              <SelectInput
                label="Are you comfortable working in a fast-paced environment where 'fast-paced' means understaffed?"
                required
                options={[
                  { value: 'yes', label: 'Yes — chaos is my comfort zone' },
                  {
                    value: 'no',
                    label: 'No — I believe in sustainable work practices',
                  },
                ]}
              />
              <SelectInput
                label="Will you accept a salary 40% below your current rate in exchange for 'equity'?"
                required
                options={[
                  {
                    value: 'yes',
                    label: 'Yes — I have done the math and it does not add up but okay',
                  },
                  { value: 'no', label: 'No — I prefer to afford groceries' },
                ]}
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 text-white font-semibold rounded-lg text-sm hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#ff4940' }}
          >
            Submit Application
          </button>

          <p className="text-xs text-gray-400 dark:text-gray-500 text-center pb-4">
            By applying you consent to receiving no response for up to 6 months.
          </p>
        </form>
      </div>

      {/* Chat widget */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="relative group">
          <button
            type="button"
            className="w-12 h-12 bg-[#ff4940] rounded-full flex items-center justify-center text-white shadow-lg hover:opacity-90 transition-opacity"
            aria-label="Open chat"
          >
            💬
          </button>
          <div className="absolute bottom-14 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-3 text-xs w-52 hidden group-hover:block">
            <p className="font-semibold text-gray-800 dark:text-gray-100">Recruiter Chat</p>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Typically replies in 3&ndash;5 business lifetimes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rejectable
