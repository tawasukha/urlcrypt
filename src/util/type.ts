export type UrlCryptOption = {
    secret: string
    pattern: string
}

export type PatternOption = {
    crypto: {
        encrypt: (text: string) => string
        decrypt: (text: string) => string
    }
    filter: string[]
    chunks: string[]
}