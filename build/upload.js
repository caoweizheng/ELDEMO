/*
 * @Descripttion:
 * @version:
 * @Author: cwz0525
 * @Date: 2021-01-13 10:30:24
 * @LastEditors: cwz0525
 * @LastEditTime: 2021-01-13 10:48:51
 */
const client = require('scp2')
const ora = require('ora')
const path = require('path')

const filePath = path.resolve(__dirname, '/../dist/')
const outPath = '/root/var/app/ELDEMO'
const config = {
  host: '121.4.100.175',
  username: 'root',
  password: 'Ccit_123',
  path: outPath
}

const upload = ora('正在上传服务器...')
console.log(`上传目录${filePath}, 目标目录${outPath}`)
upload.start()
client.scp(filePath, config, (err) => {
  if (err) {
    console.log(er)
    upload.fail()
  } else {
    upload.succeed()
  }
  console.log(`更新时间：${new Date()}`)
  upload.stop()
})
