const path = require('path')
const through = require('through2')
const Vinyl = require('vinyl')

const _ = require('./utils')

/**
 * 获取 import 列表
 */
function getImportList(acss, filePath) {
  const reg = /@import\s+(?:(?:"([^"]+)")|(?:'([^"]+)'));/ig
  const importList = []
  let execRes = reg.exec(acss)

  while (execRes && (execRes[1] || execRes[2])) {
    importList.push({
      code: execRes[0],
      path: path.join(path.dirname(filePath), execRes[1] || execRes[2]),
    })
    execRes = reg.exec(acss)
  }

  return importList
}
const importFileMap = {}
/**
 * 获取 acss 内容
 */
async function getContent(acss, filePath, cwd) {
  let importList = []
  // if (importFileMap[filePath]) {
  //   return false
  // }
  // importFileMap[filePath] = true
  if (acss) {
    const currentImportList = getImportList(acss, filePath)
    
    for (const item of currentImportList) {
      // 替换掉 import 语句，不让 less 编译
      acss = acss.replace(item.code, `/* *updated for miniprogram-component-plus* ${item.code} */`)

      // 处理依赖的 acss
      // const importAcss = await _.readFile(item.path)
      // // 这里要处理循环依赖的情况
      // const importInfo = await getContent(importAcss, item.path, cwd)
      // // 如果已经处理过了，这里不需要再加入了，否则出现循环引用的情况
      // // if (!importInfo) continue
      // // 获取依赖列表
      // importList.push(new Vinyl({
      //   cwd,
      //   path: item.path,
      //   contents: Buffer.from(importInfo.acss, 'utf8'),
      // }))
      // importList = importList.concat(importInfo.importList)
    }
  }

  return {
    acss,
    importList,
  }
}

module.exports = {
  start() {
    return through.obj(function (file, enc, cb) {
      if (file.isBuffer()) {
        getContent(file.contents.toString('utf8'), file.path, file.cwd).then(res => {
          const { acss, importList } = res

          importList.forEach(importFile => this.push(importFile))

          file.contents = Buffer.from(acss, 'utf8')
          this.push(file)
          cb()
        }).catch(err => {
          // eslint-disable-next-line no-console
          
          console.warn(`deal with ${file.path} failed: ${err.stack}`)
          this.push(file)
          cb()
        })
      } else {
        this.push(file)
        cb()
      }
    })
  },

  end() {
    return through.obj(function (file, enc, cb) {
      if (file.isBuffer) {
        const reg = /\/\*\s\*updated for miniprogram-component-plus\*\s(@import\s+(?:(?:"([^"]+)")|(?:'([^"]+)'));)\s\*\//ig
        const acss = file.contents.toString('utf8').replace(reg, (all, $1) => {
          // 把.less改成.acss
          console.log('acssreplace $1 is', $1, $1.replace('.less', '.acss').replace('weui-acss/src', 'weui-acss/dist'))
          return $1.replace('.less', '.acss').replace('weui-acss/src', 'weui-acss/dist')
        })

        file.contents = Buffer.from(acss, 'utf8')
        this.push(file)
        cb()
      } else {
        this.push(file)
        cb()
      }
    })
  },
}
