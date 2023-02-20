import { PatternOption } from "./util/type";

export function encrypt(this: PatternOption, link: string) {
    const url = new URL(link)
    const urlChunks = url.pathname.split("/")

    urlChunks[urlChunks.length - 1] = `${urlChunks[urlChunks.length - 1]}${url.search}`

    this.filter.forEach((chunk) => {
        const idx = this.chunks.indexOf(chunk)
        if (urlChunks[idx]) {
            urlChunks[idx] = this.crypto.encrypt(urlChunks[idx])
        }
    })

    return url.origin + urlChunks.join("/")
}