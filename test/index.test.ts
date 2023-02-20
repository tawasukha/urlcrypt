import { urlcrypt } from "../src/index"

const option = { secret: "www88a8078385d0c", pattern: "http://example.com/api/oauth2/:id" }
const link = "https://sub.domain.com/api/oauth2/success?redirect=https://other.domain.com/api/auth"
const encrypted = "https://sub.domain.com/api/oauth2/xh-LUHk7DZySLp2SCppLKInmmcHMLDOi0FmcP7ptnThxHgJ7lXKnsNSa9_wxWmg35Nn2A9IQxcXCjujfJaAIMw"
const crypto = urlcrypt(option)

describe('urlcrypt', () => {
    it('Register Option', () => {
        expect(crypto.option).toEqual(option);
    });
    it('Encrypt', () => {
        expect(crypto.encrypt(link)).toEqual(encrypted);
    });
    it('Decrypt', () => {
        expect(crypto.decrypt(encrypted)).toEqual(link);
    });
});
