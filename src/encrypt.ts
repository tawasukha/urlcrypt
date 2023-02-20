import { PatternOption } from "./util/type";
import crypto from "crypto"

export function encrypt(this: PatternOption, link: string) {
    const url = new URL(link)
    const urlChunks = url.pathname.split("/")

    urlChunks[urlChunks.length - 1] = `${urlChunks[urlChunks.length - 1]}${url.search}`

    this.filter.forEach((chunk) => {
        const idx = this.chunks.indexOf(chunk)
        if (urlChunks[idx]) {
            const cipher = crypto.createCipheriv(this.algorithm, this.secret, null)
            urlChunks[idx] = Buffer.concat([cipher.update(urlChunks[idx]), cipher.final()]).toString("hex");
        }
    })

    return url.origin + urlChunks.join("/")
}