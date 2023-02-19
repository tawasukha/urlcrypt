import { PatternOption, type UrlCryptOption } from "./util/type"
import { encrypt as rawEncrypt } from "./encrypt"
import { verify as rawVerify } from "./verify"
import { isPatternUrl } from "./util/validation"

export const urlcrypt = function (option: UrlCryptOption) {
    if (!isPatternUrl(option.pattern)) {
        throw new Error("Invalid Pattern")
    }
    const patternUrl = new URL(option.pattern)
    const patternChunks = patternUrl.pathname.split("/")
    const patternFilter = patternChunks.filter((chunk) => chunk.indexOf(":") === 0)

    const pattern: PatternOption = {
        filter: patternFilter,
        chunks: patternChunks,
        secret: option.secret,
    }

    const encrypt = rawEncrypt.bind(pattern)
    const verify = rawVerify.bind(pattern)
    return {
        option,
        encrypt,
        verify,
    }
} 