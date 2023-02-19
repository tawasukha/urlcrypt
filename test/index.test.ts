import { urlcrypt } from "../src/index"

const option = { secret: "Secret", pattern: "http://example.com/api/auth/:id" }
const link = "https://sub.domain.com/api/oauth2/success?redirect=https://other.domain.com/api/auth"
const encrypted = "https://sub.domain.com/api/oauth2/c6bff2779a356bb52b01f0efabc0a818b1527b9821866be71c947aa6c97c59e3"

describe('urlcrypt', () => {
    it('Register Option', () => {
        expect(urlcrypt(option).option).toEqual(option);
    });
    it('Encrypt', () => {
        expect(urlcrypt(option).encrypt(link)).toEqual(encrypted);
    });
    it('Verify', () => {
        expect(urlcrypt(option).verify(encrypted, link)).toEqual(true);
    });
});
