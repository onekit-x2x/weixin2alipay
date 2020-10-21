console.log(process.cwd())
const fs = require('fs-extra')
const path = require('path')
const { exec } = require('child_process');

const cwd = process.cwd()
const root = 'miniprogram_npm'
const dist = 'es'
/*
const list = fs.readdirSync(path.join(cwd, dist))
fs.removeSync(root)
list.forEach(file => {
    const stat = fs.lstatSync(path.join(cwd, dist, file))
    if (stat.isDirectory() && file !== 'weui-acss') {
        const npmDist =  path.join(cwd, root, file, dist)
        fs.ensureDirSync(npmDist)
        exec(`cp -a ${dist}/${file}/* ${root}/${file}/${dist}`)
        exec(`cp -a src/${file}/package.json ${root}/${file}/package.json`)
    }
})*/
