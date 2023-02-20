export type UrlCryptOption = {
    secret: string
    pattern: string
}

export type PatternOption = {
    filter: string[]
    chunks: string[]
    secret: Buffer
    algorithm: string
}