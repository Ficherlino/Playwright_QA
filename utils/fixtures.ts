import * as dotenv from 'dotenv';
import { test as baseTest } from '@playwright/test';
import { BasePage } from '../pages/basePage';
export { expect } from '@playwright/test';


dotenv.config();

export const testConfig = {
    username: process.env.USERNAME || '',
    password: process.env.PASSWORD || '',
};

export const test = baseTest.extend<{
    login: () => Promise<void>;
}>({
    login: async ({ page }, use) => {
        const basePage = new BasePage(page);
        await basePage.navigateTo();
        await basePage.login(testConfig.username, testConfig.password);
        await use(async () => {});
    },
});
