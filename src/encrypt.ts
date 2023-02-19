import { PatternOption } from "./util/type";
import crypto from "crypto"

export function encrypt(this: PatternOption, link: string) {
    const url = new URL(link)
    const urlChunks = url.pathname.split("/")
    const hmac = crypto.createHmac("sha256", this.secret)

    urlChunks[urlChunks.length - 1] = `${urlChunks[urlChunks.length - 1]}${url.search}`

    this.filter.forEach((chunk) => {
        const idx = this.chunks.indexOf(chunk)
        urlChunks[idx] = hmac.update(urlChunks[idx]).digest("hex")
    })

    return url.origin + urlChunks.join("/")
}