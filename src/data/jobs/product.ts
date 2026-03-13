import type { Job } from '@/types'

export const productJobs: Job[] = [
  {
    id: 'google-product-manager',
    companyId: 'google',
    category: 'product',
    title: 'Product Manager, Cloud AI',
    location: 'San Francisco, CA (Hybrid — 3 days in office, 4 days in meetings)',
    salary:
      '$160,000 - $290,000 (salary depends on how well you negotiate against our trained negotiation AI)',
    type: 'Full-time',
    postedDate: '2024-02-10',
    description:
      "Lead product strategy for our Cloud AI division. You'll create roadmaps that will be completely rewritten every quarter, write PRDs that no engineer will read, and present to leadership using only acronyms. Your primary responsibility is to attend 8 hours of meetings daily and then do your actual work between 6 PM and midnight.",
    requirements: [
      '5+ years of product management experience (and 10+ years of patience)',
      'MBA from a top-tier school (we need someone who can make a slide deck)',
      "Experience with AI/ML products (or at least the ability to say 'machine learning' confidently)",
      "Proven ability to say 'let's take this offline' in 7 different languages",
      'Track record of launching products that Google will shut down within 2 years',
    ],
    niceToHaves: [
      'Experience grieving the death of a Google product you built',
      'Ability to create a 47-slide strategy deck overnight',
      "Familiarity with Google's product naming conventions (random nouns + 'by Google')",
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Your PM application at Google — Cloud AI',
        body: `Dear Candidate,

Thank you for applying to the Product Manager, Cloud AI position at Google.

After reviewing your application with our state-of-the-art candidate evaluation model (which, ironically, is one of the Cloud AI products you'd be managing), we've decided to pursue other candidates at this time.

Specifically, our evaluation highlighted that you did not include a single strategy framework reference in your resume. No RICE scoring, no weighted impact matrices, no 2x2 prioritization grids. We're not sure you even know what a PRD is.

We're also concerned that you listed "launched products still alive after 3 years" as an achievement. At Google, we view product shutdown as a feature, not a bug.

We wish you the best,
Google Cloud AI Hiring Team`,
      },
    },
  },
  {
    id: 'amazon-sr-pm',
    companyId: 'amazon',
    category: 'product',
    title: 'Senior Product Manager — Technical, Alexa',
    location: 'Seattle, WA (in-office, your Alexa will monitor attendance)',
    salary: "Competitive (we'll tell you after 5 rounds of interviews)",
    type: 'Full-time',
    postedDate: '2024-01-28',
    description:
      'Own the product vision for Alexa features that 12 people use. Write PRFAQ documents that are longer than most novels. Navigate internal politics across 14 different teams, all of whom think they own your feature. Your success metric is how many 6-pagers you can write per quarter. The actual product is secondary.',
    requirements: [
      '7+ years in product management at a tech company (preferably one with ≥16 leadership principles)',
      'Ability to write a 6-page narrative document about a button color change',
      'Experience with voice-first products (talking to your plants counts)',
      'Must own at least 3 Amazon devices (we check)',
      "Demonstrated ability to work backwards from a press release for a product that doesn't exist",
    ],
    niceToHaves: [
      'Previous experience explaining to your family why Alexa laughs randomly at 3 AM',
      'Fluent in Bezos-isms',
      'Emotional detachment from features that get deprioritized',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Update: Senior Product Manager — Technical, Alexa at Amazon',
        body: `Hello,

Thank you for your interest in the Senior Product Manager — Technical, Alexa position at Amazon.

After a thorough review aligned with our Leadership Principles, we have decided not to move forward. Our Alexa-powered hiring assistant had the following concerns:

"Alexa, why wasn't this candidate selected?"
"This candidate's PRFAQ was only 4 pages. At Amazon, a proper PRFAQ is 6 pages minimum. Even this rejection email is longer than their PRFAQ."

We encourage you to reapply once you've completed our recommended reading list (estimated time: 14 months).

Best,
Amazon Alexa Talent Team
"Alexa, send rejection email."
"Okay, sending rejection email and ordering a copy of 'Working Backwards' to the candidate's address."`,
      },
    },
  },
]
