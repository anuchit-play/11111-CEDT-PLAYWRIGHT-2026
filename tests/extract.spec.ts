import { test, expect } from '@playwright/test'

test('Extract value', async ({ page }) => {
	await page.goto('https://katalon-demo-cura.herokuapp.com/')

	// get text of element
	const makeAppointmentTxt = await page
		.locator('#btn-make-appointment')
		.textContent()
	await expect(makeAppointmentTxt).toBe('Make Appointment')

	// get state of element
	const isVisible = await page.locator('#btn-make-appointment').isVisible()
	await expect(isVisible).toBeTruthy()

	await page.locator('#btn-make-appointment').click()

	// get value on text field
	await page.locator('#txt-username').fill('john')
	const value = await page.locator('#txt-username').inputValue()
	await expect(value).toBe('john')

	// count element
	await expect(
		await page.getByRole('button', { name: 'Login' }).count()
	).toEqual(1)
})
