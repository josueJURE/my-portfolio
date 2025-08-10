import {test, expect} from '@playwright/test'

test('has my name written', async({page}) => {
    await page.goto('http://localhost:5173/')
    // await expect(page.getByText('Josue Juré', { exact: true })).toBeVisible();
    await expect(page.locator('h1.name')).toHaveText('Josue Juré');
})