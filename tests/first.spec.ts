import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
	await page.goto('https://katalon-demo-cura.herokuapp.com/')

	await page.getByRole('link', { name: 'Make Appointment' }).click()

	await page.getByRole('link', { name: 'Make Appointment' }).click()
	await page.getByLabel('Username').click()
	await page.getByLabel('Username').fill('xxx')
	await page.getByLabel('Password').click()
	await page.getByLabel('Password').fill('xxxx')
	await page.getByRole('button', { name: 'Login' }).click()
})
