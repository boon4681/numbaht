# numbaht

[![numbaht](https://img.shields.io/npm/v/numbaht.svg)](https://www.npmjs.com/package/numbaht)
[![license-svg](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)

Convert Thai Baht as Text to Number as Text
## Usage
- Install with npm or yarn

  ```shell
  npm install numbaht
  # or
  yarn add numbaht
  ```
- Example
  ```javascript
  import { convert } from 'numbaht';
  
  console.log(convert("สิบห้า")); // 15
  console.log(convert("หนึ่งหมื่นหกพันห้าร้อยสี่สิบห้าล้านหกแสนห้าหมื่นแปดพันแปดร้อยหกสิบสี่")); // 16545658864
  ```

## Todo list
- support สตางค์
- support จำนวนติดลบ
- support language correction

## License
MIT
