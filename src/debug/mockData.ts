import type { Job, Company } from '@/types'

export const mockCompany: Company = {
  id: 'debug-corp',
  name: 'Debug Corp',
  industry: 'Software Testing',
  tagline: 'Ship fast, break things, test nothing.',
  headquarters: 'localhost:3000',
  employeeCount: '1 (you)',
}

export const mockJob: Job = {
  id: 'debug-job',
  companyId: 'debug-corp',
  category: 'engineering',
  title: 'Senior Debug Engineer',
  location: 'Remote (your laptop)',
  salary: '$0 (exposure only)',
  type: 'Full-time',
  postedDate: '2026-01-01',
  description:
    'A fake job used for testing UI components in isolation. No actual work required. No actual rejection will occur. (The rejection is still fake, just faster.)',
  requirements: [
    '10+ years experience with undefined behavior',
    'Strong opinions about console.log vs debugger',
    'Ability to read stack traces upside down',
  ],
  niceToHaves: [
    'Experience with /dev/null pipelines',
    'Familiarity with our proprietary void framework',
  ],
  rejectionContent: {
    'fake-email': {
      subject: 'Update on your application for Senior Debug Engineer at Debug Corp',
      body: `Dear Applicant,

Thank you for applying to Debug Corp. After a thorough review (3ms), our AI determined you are overqualified for a job that does not exist.

We will keep your resume on file.*

Best regards,
The Debug Corp Talent Team

*File deleted on save.`,
    },
    'ats-score': {
      overallScore: 42,
      categories: [
        { name: 'Buzzword Density', score: 12, comment: 'Insufficient synergy detected.' },
        {
          name: 'Years of Experience',
          score: 0,
          comment: 'Asked for 10+ years, you only have the universe.',
        },
        { name: 'Resume Font Choice', score: 88, comment: 'Arial. Bold choice.' },
        { name: 'Vibes', score: 67, comment: 'Acceptable, but not exceptional.' },
      ],
    },
    'interview-then-ghost': {
      stages: [
        { name: 'Phone Screen', result: 'Passed' },
        { name: 'Technical Assessment', result: 'Passed' },
        { name: 'Final Round with VP', result: 'Passed' },
        { name: 'Offer Stage', result: '...' },
      ],
    },
    'culture-fit': {
      recruiterName: 'Alex from Talent',
      stageReached: 'Final Round',
    },
    'phantom-offer': {
      recruiterName: 'Jamie Chen',
      jobTitle: 'Senior Debug Engineer',
      fakeSalary: '$180,000',
      promisedTimeline: 'EOD Friday',
    },
  },
}
