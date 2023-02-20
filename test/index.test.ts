import { urlcrypt } from "../src/index"

const option = { secret: "Secret", pattern: "http://example.com/api/oauth2/:id" }
const link = "https://sub.domain.com/api/oauth2/success?redirect=https://other.domain.com/api/auth"
const link2 = "https://sub.domain.com/api/"
const encrypted = "https://sub.domain.com/api/oauth2/c6bff2779a356bb52b01f0efabc0a818b1527b9821866be71c947aa6c97c59e3"

const crypto = urlcrypt(option)

describe('urlcrypt', () => {
    it('Register Option', () => {
        expect(crypto.option).toEqual(option);
    });
    it('Encrypt', () => {
        expect(crypto.encrypt(link)).toEqual(encrypted);
    });
    it('Encrypt 2', () => {
        expect(crypto.encrypt(link2)).toEqual(link2);
    });
    it('Verify', () => {
        expect(crypto.verify(encrypted, link)).toEqual(true);
    });
});
