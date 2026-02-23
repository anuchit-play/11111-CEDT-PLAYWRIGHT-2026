import { test, expect } from '@playwright/test'
import { beforeEach } from 'node:test'

test.describe('Assertion', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('https://katalon-demo-cura.herokuapp.com/')
	})

	test('Auto retry asserion', async ({ page }) => {
		await expect(page.locator('#btn-make-appointment')).toHaveText(
			'Make Appointment'
		)
	})

	test('Non retry assertion', async ({ page }) => {
		const text = await page.locator('#btn-make-appointment').textContent()
		await expect(text).toBe('Make Appointment')
	})
})
