import { test, expect } from '../utils/fixtures';

test('basic test', async ({ page }) => {
    await page.goto('/'); 
    const title = await page.title();
    expect(title).toBe('Swag Labs');
});

test('login test', async ({ login, page }) => {
    await login(); 
    const title = await page.title();
    expect(title).toBe('Swag Labs'); 
});