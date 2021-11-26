const baht = require('baht')
const fs = require('fs')
const path = require('path')

const test_ = {
    "works": [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 19, 20, 25, 29, 100, 110, 120, 121, 125, 200, 280, 289, 1000,1000000000000,1000000000010, 1264565765, 98945665626, 546328000000,123456789123456789
    ]
}

const text = Object.keys(test_).map(name => {
    let expect_ = []
    const num = test_[name]
    for (const value of num) {
        expect_.push(`expect(convert("${baht.convert(value).replace('ถ้วน','')}")).toEqual('${value}')`)
    }
    return (
        `
test('${name}', () => {
    ${expect_.join("\n    ")}
})
`
    )
})
fs.writeFileSync('./test/index.test.ts',`
import { convert } from '../src'

${text.join('\n\n')}
`)