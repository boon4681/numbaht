const sib = ["ยี่", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "เก้า"]
const nuay = ["หนึ่ง", "สอง", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "เก้า"]

function include(text: string, r: string) {
    return text.indexOf(r) !== -1
}

function lan(text: string): any {
    if (include(text, "ล้าน")) {
        let i = text.indexOf("ล้าน")
        return String(1e6 + lan(text.slice(i + 4, text.length))).slice(1)
    }
    if (include(text, "แสน")) {
        let i = text.indexOf("แสน")
        let m = text.slice(0, i);
        let num = 1e5 * lan(m)
        return num + lan(text.slice(i + 3, text.length))
    }
    if (include(text, "หมื่น")) {
        let i = text.indexOf("หมื่น")
        let m = text.slice(0, i);
        let num = 1e4 * lan(m)
        return num + lan(text.slice(i + 5, text.length))
    }
    if (include(text, "พัน")) {
        let i = text.indexOf("พัน")
        let m = text.slice(0, i);
        let num = 1e3 * lan(m)
        return num + lan(text.slice(i + 3, text.length))
    }
    if (include(text, "ร้อย")) {
        let i = text.indexOf("ร้อย")
        let m = text.slice(0, i);
        let num = 1e2 * lan(m)
        return num + lan(text.slice(i + 4, text.length))
    }
    if (include(text, "สิบ")) {
        let i = text.indexOf("สิบ")
        let m = text.slice(0, i);
        let num = 10
        for (let i = 0; i < sib.length; i++) {
            if (m.indexOf(sib[i]) == 0) {
                num *= (i + 2)
                break
            }
        }
        return num + lan(text.slice(i + 3, text.length))
    }
    for (let i = 0; i < nuay.length; i++) {
        if (text.indexOf(nuay[i]) == 0) {
            return (i + 1)
        }
    }
    if (text.indexOf("เอ็ด") == 0) {
        return 1
    }
    if (text.indexOf("ศูนย์") > -1) {
        return 0
    }
    return null
}

export function convert(text: string) {
    let baht_satang = text.split('บาท').filter(a => a)
    if (baht_satang.length > 1) {
        if (baht_satang.filter(a => a.indexOf("สตางค์") !== -1).length > 0) {
            throw "satang are not support yet"
        }
        throw "bad inputs"
    }
    return text.replaceAll("ล้าน"," ล้าน").split(" ").map(a => lan(a)).join("")
}