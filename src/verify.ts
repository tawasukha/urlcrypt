import { PatternOption } from "./util/type";
import { encrypt } from "./encrypt";

export function verify(this: PatternOption, encrypted: string, link: string) {
    const compared = encrypt.call(this, link)
    return compared === encrypted
}