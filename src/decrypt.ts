import { PatternOption } from "./util/type";
import crypto from "crypto"

export function decrypt(this: PatternOption, link: string) {
    const url = new URL(link)
    const urlChunks = url.pathname.split("/")

    this.filter.forEach((chunk) => {
        const idx = this.chunks.indexOf(chunk)
        if (urlChunks[idx]) {
            const decipher = crypto.createDecipheriv(this.algorithm, this.secret, null)
            urlChunks[idx] = Buffer.concat([decipher.update(Buffer.from(urlChunks[idx], "hex")), decipher.final()]).toString("utf8");;
        }
    })

    return url.origin + urlChunks.join("/")
}