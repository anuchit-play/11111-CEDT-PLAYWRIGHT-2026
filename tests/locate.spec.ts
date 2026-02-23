import { test, expect } from '@playwright/test'

test.describe('Locate elements', async () => {
	test('Get unique element', async ({ page }) => {
		await page.goto('https://katalon-demo-cura.herokuapp.com/')
		// locate element
		await page
			.getByRole('link', { name: 'Make Appointment', exact: true })
			.click()
		await page.getByLabel('Username').fill('myname')

		// xpath
		await page.locator('//button[@id="btn-login"]').click()

		// css
		await page.locator('#btn-login').click()
	})

	test('Locate element using index', async ({ page }) => {
		await page.getByPlaceholder('Username').nth(1).fill('username')
		await page.getByPlaceholder('Username').last().fill('useername')
		await page.getByPlaceholder('Username').first().fill('useername')
	})
})
