import { PatternOption } from "./util/type";

export function decrypt(this: PatternOption, link: string) {
    const url = new URL(link)
    const urlChunks = url.pathname.split("/")

    this.filter.forEach((chunk) => {
        const idx = this.chunks.indexOf(chunk)
        if (urlChunks[idx]) {
            urlChunks[idx] = this.crypto.decrypt(urlChunks[idx])
        }
    })

    return url.origin + urlChunks.join("/")
}