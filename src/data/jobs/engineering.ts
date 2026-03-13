import type { Job } from '@/types'

export const engineeringJobs: Job[] = [
  {
    id: 'google-senior-frontend',
    companyId: 'google',
    category: 'engineering',
    title: 'Senior Frontend Engineer',
    location: 'Remote (must be in office 4 days a week)',
    salary: 'Competitive (we competed to find the lowest possible number)',
    type: 'Full-time',
    postedDate: '2024-01-15',
    description:
      "Join our team to build user interfaces that billions of people will never notice. You'll work on projects that may or may not ship, in a fast-paced environment (we are always on fire). This role offers unlimited PTO (average taken: 3 days/year) and the opportunity to attend meetings about meetings.",
    requirements: [
      '5+ years experience in React (the framework is 11 years old, but we need 15)',
      "Expert knowledge of TypeScript, JavaScript, and at least 3 frameworks we'll deprecate next quarter",
      'PhD in Computer Science preferred (for a job that involves centering divs)',
      "Must be comfortable with ambiguity (we don't know what we're building either)",
      'Ability to thrive in a fast-paced environment (we are always on fire)',
    ],
    niceToHaves: [
      "Experience with our internal tools (which we won't tell you about until day 1)",
      'Published research in a field completely unrelated to this role',
      'Willingness to relocate to any of our 47 offices, possibly simultaneously',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Update on your application for Senior Frontend Engineer at Google',
        body: `Dear Applicant,

Thank you for your interest in the Senior Frontend Engineer position at Google. After careful consideration by our AI-powered screening system (which spent approximately 0.003 seconds reviewing your application), we have decided to move forward with other candidates.

While your qualifications were impressive, we were looking for someone with exactly 15 years of React experience, a PhD in Quantum CSS, and the ability to solve a binary tree on a whiteboard while juggling.

We encourage you to apply again in 6 months, when we'll post the same role with even more unrealistic requirements.

We'll keep your resume on file.*

Best regards,
The Google Talent Team

*File will be deleted in 5... 4... 3...`,
      },
      'ats-score': {
        overallScore: 7,
        categories: [
          {
            name: 'Buzzword Density',
            score: 12,
            comment: 'Did not mention "synergy" or "leverage" once. Deeply concerning.',
          },
          {
            name: 'Years of Experience vs. Technology Age',
            score: 3,
            comment: 'Claims 8 years of React. We need 15. React is 11 years old. Not our problem.',
          },
          {
            name: 'Enthusiasm for Free Snacks',
            score: 0,
            comment: "Failed to mention Google's snack program even once. CRITICAL FAILURE.",
          },
          {
            name: 'Whiteboard Problem Solving',
            score: 5,
            comment: 'Resume did not include a hand-drawn binary tree. Automatic penalty.',
          },
          {
            name: 'Cultural Fit Score',
            score: 15,
            comment: 'Used the word "innovative" but not "Googley." Insufficient brand alignment.',
          },
        ],
      },
    },
  },
  {
    id: 'google-backend-engineer',
    companyId: 'google',
    category: 'engineering',
    title: 'Software Engineer, Backend Systems',
    location: 'Mountain View, CA (Hybrid — but actually full-time in office)',
    salary: "$180,000 - $350,000 (you'll get $180,000)",
    type: 'Full-time',
    postedDate: '2024-02-01',
    description:
      "We're looking for a backend engineer to maintain systems that handle billions of requests per second. You'll be responsible for infrastructure that, if it goes down, takes half the internet with it. No pressure. Your work will be reviewed by a committee of 12 people, most of whom have never written backend code.",
    requirements: [
      "7+ years of experience in distributed systems (we're distributed across 12 time zones, good luck scheduling a meeting)",
      'Fluent in Go, Java, C++, and whatever language we invent next Tuesday',
      "Experience handling systems at Google-scale (if you haven't worked at Google, how would you have this?)",
      'Must pass 6 rounds of interviews, each progressively more soul-crushing',
    ],
    niceToHaves: [
      'Previous experience being on-call at 3 AM on Christmas',
      'Ability to explain to your family what you actually do',
      'Emotional resilience',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Your application to Google — Software Engineer, Backend Systems',
        body: `Hi there,

We appreciate you taking the time to apply for the Software Engineer, Backend Systems role at Google.

After an extensive review process (our ML model processed your resume in 0.0001 seconds — a new personal best), we regret to inform you that we will not be moving forward with your application at this time.

Our hiring committee noted that while your experience was "technically adequate," you failed to demonstrate sufficient passion for our free lunch program during the cover letter analysis phase.

We encourage you to continue developing your skills and to reapply when you've accumulated the 15 years of Kubernetes experience we require (Kubernetes is 10 years old, but we believe in ambitious candidates).

Warm regards,
Google People Operations
(This is an automated message. Please do not reply. We wouldn't read it anyway.)`,
      },
    },
  },
  {
    id: 'amazon-sde2',
    companyId: 'amazon',
    category: 'engineering',
    title: 'Software Development Engineer II',
    location: 'Seattle, WA (Return to Office — Day 1 of 365)',
    salary: 'Competitive base + stock that vests in 4 years (if you survive)',
    type: 'Full-time',
    postedDate: '2024-01-20',
    description:
      "Are you customer-obsessed? Can you think big while also diving deep? Do you have a bias for action and insist on the highest standards while being frugal? If you used all 16 leadership principles in your last sentence, you might be ready for Amazon. You'll build services that process millions of orders, and your on-call rotation will ensure you never sleep through the night again.",
    requirements: [
      "3+ years of experience (but we'll interview you like you need 10)",
      'Must be able to recite all 16 Amazon Leadership Principles from memory',
      'Experience writing 6-page documents instead of PowerPoints',
      'Willingness to debate whether a door-desk is actually ergonomic',
      'Comfort with being PIPed for taking a lunch break',
    ],
    niceToHaves: [
      'Previous warehouse experience (for team-building exercises)',
      'Ability to say "it\'s Day 1" with a straight face',
      "Own an Alexa device (we're watching... listening)",
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Regarding your application — Software Development Engineer II at Amazon',
        body: `Dear Candidate,

Thank you for your interest in Amazon and the SDE II position. We are writing to let you know that after careful review, we have decided not to move forward with your application.

During our assessment, we noticed that your response to the Leadership Principles portion was missing references to at least 9 of our 16 Leadership Principles. At Amazon, we expect candidates to naturally weave all 16 principles into every sentence, including their breakfast order.

Additionally, our system flagged that you took more than 2 minutes to complete our 45-minute coding assessment, suggesting a lack of Bias for Action.

We wish you the best in your future endeavors and encourage you to apply again after you've read "Working Backwards" at least 7 times.

Best,
Amazon Talent Acquisition
(Remember: it's always Day 1. Except for your application. That's done.)`,
      },
      'ats-score': {
        overallScore: 4,
        categories: [
          {
            name: 'Leadership Principle Alignment',
            score: 8,
            comment:
              'Only referenced 3 of 16 Leadership Principles. Did not even mention "Frugality" — ironically, very frugal with LP references.',
          },
          {
            name: 'Door-Desk Enthusiasm',
            score: 0,
            comment:
              'Zero mentions of door-desks. Candidate may expect actual furniture. Red flag.',
          },
          {
            name: 'Bias for Action Score',
            score: 2,
            comment:
              'Took 3 days to submit application. Jeff would have launched a new product in that time.',
          },
          {
            name: 'Customer Obsession',
            score: 12,
            comment:
              'Used the word "user" instead of "customer." We don\'t have users. We have customers. Devastating error.',
          },
          {
            name: 'Day 1 Mentality',
            score: 5,
            comment: 'Resume mentions "years of experience." That\'s Day 2 thinking.',
          },
        ],
      },
    },
  },
]
