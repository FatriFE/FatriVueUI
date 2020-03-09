/**
 * Created by starlee on 2020/03/09.
 */
'use strict';

process.on('exit', () => {
    console.log('exit process')
})

console.log('process', process.argv)

// 判断组件名参数
if(!process.argv[2]) {
    console.error('component name is required, Please enter new component name')
    process.exit(1)
}

const path = require('path')
const fileSave = require('file-save')
const uppercamelcase = require('uppercamelcase')
const componentName = process.argv[2]  //组件名称
const chineseName = process.argv[3] || componentName    // 组件中文名称
const ComponentName = uppercamelcase(componentName)   // 驼峰格式的组件名称


// 添加到 components.json 文件
const componentsFile = require('../../components.json')
if(componentsFile[componentName]) {
    console.error(`${componentName} has existed !`)
    process.exit(1)
}

componentsFile[componentName] = `./packages/${componentName}/index`
fileSave(path.join(__dirname, '../../components.json'))
    .write(JSON.stringify(componentsFile, null, '  '), 'utf-8')
    .end('\n')
