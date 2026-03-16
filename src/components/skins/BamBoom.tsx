import { useState } from 'react'
import type { AtsSkinProps } from '@/types'
import { TextInput } from '@/components/shared/TextInput'
import { TextArea } from '@/components/shared/TextArea'
import { FileUpload } from '@/components/shared/FileUpload'
import { SelectInput } from '@/components/shared/SelectInput'

function BamBoom({ job, company, onSubmit }: AtsSkinProps) {
  const [bambooHeight, setBambooHeight] = useState(20)
  const [submitted, setSubmitted] = useState(false)
  const [axeVisible, setAxeVisible] = useState(false)

  const growBamboo = () => {
    setBambooHeight((h) => Math.min(h + 8, 220))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setAxeVisible(true)
    setTimeout(() => {
      setSubmitted(true)
      onSubmit()
    }, 1500)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f8faf4] dark:bg-gray-950 flex items-center justify-center px-4">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-12 text-center max-w-md">
          <div className="text-5xl mb-4">🌱</div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Your career journey with us starts here!
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            We've received your application and our People team will be in touch soon. Or not. But
            we appreciate your vulnerability.
          </p>
          <p className="text-xs text-gray-300 dark:text-gray-600 mt-6">Powered by BambooHR&trade;</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f8faf4] dark:bg-gray-950 pb-16 relative">
      {/* Bamboo stalk decoration */}
      <div className="fixed bottom-6 right-8 z-30 flex flex-col items-center gap-1 pointer-events-none">
        {axeVisible && (
          <div className="text-2xl animate-bounce mb-1" style={{ animationDuration: '0.3s' }}>
            🪓
          </div>
        )}
        <div
          className="w-4 rounded-t-sm transition-all duration-1000"
          style={{
            height: axeVisible ? '4px' : `${bambooHeight}px`,
            background: axeVisible
              ? 'transparent'
              : 'linear-gradient(to top, #5d9130, #73ac3a, #8dc654)',
          }}
        />
        {!axeVisible && bambooHeight > 30 && (
          <div className="text-base" style={{ marginTop: '-8px' }}>
            🎋
          </div>
        )}
      </div>

      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: '#73ac3a' }}
            >
              🎋
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{company.name}</p>
              <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">{job.title}</h1>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
            Thank you for your interest in joining our team! We're thrilled to review your
            application and learn more about the wonderful human you are.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Personal Information
            </h2>
            <div className="space-y-4">
              <TextInput label="Full Name" required />
              <TextInput
                label="Email Address"
                required
                type="email"
                placeholder="We'll use this to send automated rejection warmth"
              />
              <TextInput label="Phone Number" type="tel" />
              <TextInput
                label="City & State"
                placeholder="Where you currently put your plants"
              />
            </div>
          </div>

          {/* Resume */}
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Resume
            </h2>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">
              Upload your resume. Our recruiters will absolutely read every single word of it.
            </p>
            <FileUpload label="Resume (PDF preferred)" required />
          </div>

          {/* Application Questions */}
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Application Questions
            </h2>
            <div className="space-y-4">
              <TextArea
                label="Why do you want to join our team? (We love enthusiasm!)"
                required
                rows={4}
              />
              <TextArea
                label="How do you like to receive feedback?"
                rows={3}
                placeholder="Tip: do not say 'honestly' — that implies we haven't been"
              />
              <TextInput
                label="Describe your ideal manager in three words"
                placeholder="'Doesn't micromanage' is technically four"
              />
              <TextArea
                label="Tell us about a time you demonstrated our core values (we'll send them after you apply)"
                rows={3}
              />
              <SelectInput
                label="Desired Start Date"
                options={[
                  { value: 'asap', label: 'ASAP — I am extremely available' },
                  { value: '2-weeks', label: '2 Weeks — I respect my current employer' },
                  { value: '1-month', label: '1 Month — I have things to wrap up' },
                  {
                    value: 'soul',
                    label: 'When my soul returns from wherever it went',
                  },
                ]}
              />
              <SelectInput
                label="What best describes your work style?"
                options={[
                  {
                    value: 'independent',
                    label: 'Independent — great, we have no onboarding',
                  },
                  {
                    value: 'collaborative',
                    label: "Collaborative — you'll love our 11 daily standups",
                  },
                  {
                    value: 'structured',
                    label: 'Structured — adorable, we pivot weekly',
                  },
                  {
                    value: 'flexible',
                    label: "Flexible — we were hoping you'd say that",
                  },
                ]}
              />
            </div>
          </div>

          {/* Wellness check */}
          <div className="bg-[#f0f7e8] dark:bg-[#1a2e10] border border-[#c8e6a0] dark:border-[#3a5e20] rounded-xl p-4 text-sm text-[#3a6012] dark:text-[#a0d060]">
            <p className="font-medium mb-1">A note from our People & Culture team 🌿</p>
            <p className="text-xs leading-relaxed opacity-90">
              We believe in the whole employee. Before submitting, take a deep breath. You are more
              than your job title. Unless your job title is "Senior Engineer", in which case please
              apply immediately.
            </p>
          </div>

          <button
            type="submit"
            onClick={growBamboo}
            className="w-full py-3 bg-[#73ac3a] hover:bg-[#5d9130] text-white font-semibold rounded-xl text-sm transition-colors"
          >
            Submit Application
          </button>

          <p className="text-xs text-gray-300 dark:text-gray-600 text-center">
            Powered by BambooHR&trade; &mdash; Growing People&trade; (results not guaranteed)
          </p>
        </form>
      </div>
    </div>
  )
}

export default BamBoom
