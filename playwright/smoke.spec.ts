import { test, expect } from '@playwright/test'

const ALL_SKINS = [
  'worknight',
  'greenhouse-of-pain',
  'talaeo',
  'linked-out',
  'ashbye-hq',
  'byebob',
  'rejectable',
  'lever-to-nowhere',
  'bamboom',
  'teamfailor',
  'icantms',
  'dumb-recruiters',
  'jobvoid',
]

const ALL_REJECTIONS = [
  'dev-null',
  'ghost',
  'speedrun',
  'fake-email',
  'ats-score',
  'shredder',
  'black-hole',
  'assessment-gauntlet',
  'culture-fit',
  'interview-then-ghost',
  'phantom-offer',
]

for (const skinId of ALL_SKINS) {
  test(`skin ${skinId} renders a form`, async ({ page }) => {
    await page.goto(`/debug/skin/${skinId}`)
    await page.waitForLoadState('networkidle')
    await expect(page.locator('form')).toBeVisible()
  })
}

for (const rejectionId of ALL_REJECTIONS) {
  test(`rejection ${rejectionId} renders`, async ({ page }) => {
    await page.goto(`/debug/rejection/${rejectionId}`)
    await page.waitForLoadState('networkidle')
    await expect(page.getByText(`rejection: ${rejectionId}`)).toBeVisible()
  })
}
