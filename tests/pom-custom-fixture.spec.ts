import { test, expect } from '../fixtures'

test('Login failed with invalid username', async ({
	page,
	indexPage,
	loginPage,
}) => {
	await page.goto('https://katalon-demo-cura.herokuapp.com/')
	await indexPage.clickMakeAppointment()
	await loginPage.inputLoginForm('John wick', 'ThisIsNotAPassword')

	// Assertion
	await expect(await loginPage.alertTxt).toHaveText(
		'Login failed! Please ensure the username and password are valid.'
	)
})
