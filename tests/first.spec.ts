import { test, expect } from '@playwright/test'

// test.describe = test suite
test.describe('Login feature', async () => {
	const URL: string = process.env.URL ?? ''
	test.beforeAll(async () => {
		console.log('This is before all')
	})
	test.beforeEach(async ({ page }) => {
		// Arrange steps

		// navigate to website
		await page.goto(URL)

		// Action steps
		await page.getByRole('link', { name: 'Make Appointment' }).click()
	})

	test.afterAll(async () => {
		console.log('This is after all')
	})

	test.afterEach(async ({ page }) => {
		console.log('This is after each')
	})

	// test = test case
	test('Login passed with valid credential @happy', async ({ page }) => {
		// test steps
		//....
		//..
		await page.getByLabel('Username').click()
		await page.getByLabel('Username').fill('John Doe')
		await page.getByLabel('Password').click()
		await page.getByLabel('Password').fill('xxxx')
	})

	test('Login failed with wrong username @negative', async ({ page }) => {
		// test steps

		await page.getByLabel('Username').click()
		await page.getByLabel('Username').fill('xxx')
		await page.getByLabel('Password').click()
		await page.getByLabel('Password').fill('xxxx')
		await page.getByRole('button', { name: 'Login' }).click()

		// Assertion steps
		await expect(page.locator('.lead.text-danger')).toHaveText(
			'Login failed! Please ensure the username and password are valid.'
		)
	})
})
