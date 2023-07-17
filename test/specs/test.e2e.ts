/**
 * test with page objects
 */
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe.skip('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    await browser.pause(10000);
    })
})

describe('Google Add', async() => {
    it('Open Site', async() => {
        await browser.url("https://www.google.com");
        await browser.pause(5000);
    });
    it('Add data to search and click search',async () => {
        await ((await $('//*[@id="APjFqb"]')).setValue("youtube"));
        $('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b').click();
        await browser.pause(5000);
    });
});
