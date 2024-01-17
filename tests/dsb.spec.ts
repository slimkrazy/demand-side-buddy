import { test, expect } from '@playwright/test'

test('has counter', async ({ page }) => {
  await page.goto('/')

  const button = page.getByRole('button')

  // Expect page to have counter
  await expect(button).toContainText('count is 0')
})
