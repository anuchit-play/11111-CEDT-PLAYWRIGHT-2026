import { test, expect } from '../fixtures'

test('Environment variables', async ({ page, indexPage, loginPage }) => {
	const URL = process.env.URL ?? ''
	await page.goto(URL)
	await indexPage.clickMakeAppointment()
	await loginPage.inputLoginForm('John wick', 'ThisIsNotAPassword')

	// Assertion
	await expect(await loginPage.alertTxt).toHaveText(
		'Login failed! Please ensure the username and password are valid.'
	)
})
