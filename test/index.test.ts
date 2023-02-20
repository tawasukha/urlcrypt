import { urlcrypt } from "../src/index"

const option = { secret: "www88a8078385d0c", pattern: "http://example.com/api/oauth2/:id" }
const link = "https://sub.domain.com/api/oauth2/success?redirect=https://other.domain.com/api/auth"
const encrypted = "https://sub.domain.com/api/oauth2/c61f8b50793b0d9c922e9d920a9a4b2889e699c1cc2c33a2d0599c3fba6d9d38711e027b9572a7b0d49af7fc315a6837e4d9f603d210c5c5c28ee8df25a00833"
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
