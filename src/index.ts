import { PatternOption, type UrlCryptOption } from "./util/type"
import { encrypt as rawEncrypt } from "./encrypt"
import { decrypt as rawDecrypt } from "./decrypt"
import { Buffer } from "buffer"
import { isPatternUrl } from "./util/validation"
import { crypt } from "@tawasukha/crypt"

export const urlcrypt = function (option: UrlCryptOption) {
    if (!isPatternUrl(option.pattern)) {
        throw new Error("Invalid Pattern")
    }
    if (option.secret.length !== 16) {
        throw new Error("Secret must be 16 characters")
    }

    const crypto = crypt({
        secret: option.secret,
        output: "base64url"
    })
    const patternUrl = new URL(option.pattern)
    const patternChunks = patternUrl.pathname.split("/")
    const patternFilter = patternChunks.filter((chunk) => chunk.indexOf(":") === 0)

    const pattern: PatternOption = {
        crypto,
        filter: patternFilter,
        chunks: patternChunks,
    }

    const encrypt = rawEncrypt.bind(pattern)
    const decrypt = rawDecrypt.bind(pattern)

    return {
        option,
        encrypt,
        decrypt,
    }
} 