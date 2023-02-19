# URL Crypt

Library for encrypt and verify URL

## Installation

```sh
pnpm add @tawasukha/urlcrypt
```

## Commands

```typescript
import { urlcrypt } from "@tawasukha/urlcrypt"

const crypto = urlcrypt({
  secret: "Secret", 
  pattern: "http://example.com/api/auth/:id"
})
const link = "https://sub.domain.com/api/oauth2/secret_path?secretparam=secretvalue"

const encrypted = crypto.encrypt(link)
console.log(crypto.verify(encrypted,link))
```

## Inspired from

-   [Crypto Urls](https://github.com/web-slate/crypto-urls)
-   [Url Encrypt](https://github.com/manvel-khnkoyan/url-encrypt/)