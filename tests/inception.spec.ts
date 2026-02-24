import { test, expect } from '@playwright/test'
import mockData from '../test-data/apis/mock.json'

test('Modify response data', async ({ page }) => {
	// intercept response
	await page.route(/exchangeRateService/, async route => {
		route.fulfill({
			status: 200,
			contentType: 'application/json',
			body: JSON.stringify(mockData),
		})
	})

	// trigger event
	await page.goto(
		'https://www.scb.co.th/en/personal-banking/foreign-exchange-rates'
	)
})
