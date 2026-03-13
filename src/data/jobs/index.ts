import Fuse from 'fuse.js'
import type { Job } from '@/types'
import { engineeringJobs } from './engineering'
import { productJobs } from './product'
import { designJobs } from './design'
import { marketingJobs } from './marketing'
import { dataScienceJobs } from './data-science'
import { financeJobs } from './finance'
import { operationsJobs } from './operations'
import { managementJobs } from './management'
import { salesJobs } from './sales'
import { hrJobs } from './hr'

export const allJobs: Job[] = [
  ...engineeringJobs,
  ...productJobs,
  ...designJobs,
  ...marketingJobs,
  ...dataScienceJobs,
  ...financeJobs,
  ...operationsJobs,
  ...managementJobs,
  ...salesJobs,
  ...hrJobs,
]

export const jobSearchIndex = new Fuse(allJobs, {
  keys: [
    { name: 'title', weight: 0.4 },
    { name: 'description', weight: 0.2 },
    { name: 'companyId', weight: 0.2 },
    { name: 'category', weight: 0.1 },
    { name: 'location', weight: 0.1 },
  ],
  threshold: 0.4,
  includeScore: true,
})
