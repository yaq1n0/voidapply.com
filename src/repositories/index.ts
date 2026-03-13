import type { Company, Job, RejectionModeId } from '@/types'
import { companies } from '@/data/companies'
import { allJobs, jobSearchIndex } from '@/data/jobs'
import { atsSkins } from '@/data/skins'
import { rejectionModes } from '@/data/rejectionModes'

const GENERIC_MODES: RejectionModeId[] = ['dev-null', 'ghost', 'speedrun']

export const CompanyRepository = {
  getAll(): Company[] {
    return companies
  },

  getById(id: string): Company | undefined {
    return companies.find((c) => c.id === id)
  },
}

export const JobRepository = {
  getAll(): Job[] {
    return allJobs
  },

  getById(id: string): Job | undefined {
    return allJobs.find((j) => j.id === id)
  },

  getByCompany(companyId: string): Job[] {
    return allJobs.filter((j) => j.companyId === companyId)
  },

  search(query: string): Job[] {
    if (!query.trim()) return allJobs
    return jobSearchIndex.search(query).map((result) => result.item)
  },

  getSupportedRejectionModes(job: Job): RejectionModeId[] {
    const supported: RejectionModeId[] = [...GENERIC_MODES]
    const content = job.rejectionContent
    if (content['fake-email']) supported.push('fake-email')
    if (content['ats-score']) supported.push('ats-score')
    if (content['interview-then-ghost']) supported.push('interview-then-ghost')
    return supported
  },
}

export const SkinRepository = {
  getAll() {
    return atsSkins
  },

  getById(id: string) {
    return atsSkins.find((s) => s.id === id)
  },

  getRandom() {
    return atsSkins[Math.floor(Math.random() * atsSkins.length)]!
  },
}

export const RejectionModeRepository = {
  getAll() {
    return rejectionModes
  },

  getById(id: string) {
    return rejectionModes.find((m) => m.id === id)
  },

  getRandom(supportedIds: RejectionModeId[]) {
    const idx = Math.floor(Math.random() * supportedIds.length)
    return rejectionModes.find((m) => m.id === supportedIds[idx])
  },
}
