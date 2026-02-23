import { test, expect } from '@playwright/test'

test.describe('Interact with elements', async () => {
	test('Interact with popup', async ({ page }) => {
		// Waiting popup before click popup (without await)
		//const popupPromise = page.waitForEvent('popup')

		await page.goto('https://testautomationpractice.blogspot.com/')

		const [popup] = await Promise.all([
			page.waitForEvent('popup'),
			await page.getByRole('button', { name: 'Popup Windows' }).click(),
		])

		//const popup = await popupPromise

		// Assertion
		await expect(popup.locator('h1')).toHaveText(
			"Selenium automates browsers. That's it!"
		)
	})

	test('Interact with dialog', async ({ page }) => {
		await page.goto('https://testautomationpractice.blogspot.com/')

		// 1. Register the dialog handler first.
		page.on('dialog', async dialog => {
			console.log(`Alert message: ${dialog.message()}`)
			// Optional: Assert the dialog type and message
			expect(dialog.type()).toBe('alert')
			expect(dialog.message()).toContain('I am an alert box!')
			// 2. Accept the dialog (for alert/confirm) or dismiss it.
			await dialog.accept()
			// For a prompt, you can pass text: await dialog.accept('my input');
		})

		await page.getByRole('button', { name: 'Simple Alert' }).click()
	})
})
