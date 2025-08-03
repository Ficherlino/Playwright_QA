import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    retries: 2,
    use: {
        baseURL: 'https://www.saucedemo.com', // URL base para os testes
        headless: true,
    },
});