import { test, expect } from '@playwright/test'

test('Page related commands', async ({ page }) => {
	await page.goto('https://katalon-demo-cura.herokuapp.com/')

	const title = await page.title()

	await expect(title).toBe('CURA Healthcare Service')

	await page.locator('#btn-make-appointment').click()
	await page.waitForLoadState()

	const url = await page.url()

	await expect(url).toContain('profile.php#login')
	await page.reload()
	await page.goBack()
	await page.goForward()
})
