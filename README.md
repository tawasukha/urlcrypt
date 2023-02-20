# URL Crypt

Library for encrypt and decrypt URL

## Installation

```sh
pnpm add @tawasukha/urlcrypt
```

## Commands

```typescript
import { urlcrypt } from "@tawasukha/urlcrypt"

const crypto = urlcrypt({
  secret: "www88a8078385d0c", 
  pattern: "http://example.com/api/auth/:id"
})
const link = "https://sub.domain.com/api/oauth2/secret_path?secretparam=secretvalue"

const encrypted = crypto.encrypt(link)
const decrypted = crypto.decrypt(encrypted)
console.log("encrypted",ecrypted)
console.log("decrypted",decrypted)
```

## Inspired from

-   [Crypto Urls](https://github.com/web-slate/crypto-urls)
