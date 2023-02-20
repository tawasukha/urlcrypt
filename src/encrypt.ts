import { PatternOption } from "./util/type";
import crypto from "crypto"

export function encrypt(this: PatternOption, link: string) {
    const url = new URL(link)
    const urlChunks = url.pathname.split("/")

    urlChunks[urlChunks.length - 1] = `${urlChunks[urlChunks.length - 1]}${url.search}`

    this.filter.forEach((chunk) => {
        const idx = this.chunks.indexOf(chunk)
        if (urlChunks[idx]) {
            const hmac = crypto.createHmac("sha256", this.secret)
            urlChunks[idx] = hmac.update(urlChunks[idx]).digest("hex")
        }
    })

    return url.origin + urlChunks.join("/")
}