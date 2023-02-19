export const isUrl = (link: string) => {
    var res = link.match(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    )
    return res !== null
}

export const isPatternUrl = (link: string) => {
    if (isUrl(link)) {
        const url = new URL(link)
        const chunks = url.pathname.split('/')
        return filterPatterns(chunks).length > 0
    }
    return false
}

export const filterPatterns = (chunks: string[]) => {
    return chunks.filter((param) => param.indexOf(':') === 0)
}