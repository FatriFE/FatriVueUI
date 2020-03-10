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
const fs = require('fs')
const fileSave = require('file-save')
const uppercamelcase = require('uppercamelcase')
const componentName = process.argv[2]  //组件名称
const chineseName = process.argv[3] || componentName    // 组件中文名称
const userName = process.argv[4] || null    // 组件作者
const ComponentName = uppercamelcase(componentName)   // 驼峰格式的组件名称
const PackagePath = path.resolve(__dirname, '../../packages', componentName)
const Files = [
    {
        filename: 'index.js',
        content: `import ${ComponentName} from './src/main';
${ComponentName}.install = (Vue) => {
    Vue.component(${ComponentName}.name, ${ComponentName})
}
export default ${ComponentName}`
    },
    {
        filename: 'src/main.js',
        content: `<template>
    <div class="fa-${componentName}"></div>
</template>

<script >
export default {
    name: 'Fa${ComponentName}'
}
</script>`
    }
]


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

console.log('更新component.json 文件成功')


// 创建package 文件夹及初始化组件代码
Files.forEach(file => {
    fileSave(path.join(PackagePath, file.filename))
        .write(file.content, 'utf-8')
        .end('\n')
})

console.log('初始化文件结构成功')

// 添加到 nav.config.js
const navConfigFile = require('../../examples/nav.config')

Object.keys(navConfigFile).forEach(lang => {
    let groups = navConfigFile[lang][2].groups

    let userIndex = groups.findIndex(item => item.groupName === userName)

    if(userIndex > -1) {
        groups[userIndex].list.push({
            path: `/${componentName}`,
            title: lang === 'zh-CN' && componentName !== chineseName
                ? `${ComponentName} ${chineseName}`
                : ComponentName
        });
    }else {
        groups[groups.length - 1].list.push({
            path: `/${componentName}`,
            title: lang === 'zh-CN' && componentName !== chineseName
                ? `${ComponentName} ${chineseName}`
                : ComponentName
        });
    }
})

fileSave(path.join(__dirname, '../../examples/nav.config.json'))
    .write(JSON.stringify(navConfigFile, null, '  '), 'utf8')
    .end('\n');

console.log('初始化路由信息成功')

// 初始化组件文档
const docPath = `../../examples/docs/zh-CN/${ componentName }.md`
const docContent = `## ${componentName} ${chineseName}
:::demo ${componentName} 说明 demo 
:::
`

try {
    fs.statSync(path.resolve(__dirname, docPath));
} catch (e) {
    fs.writeFile(path.resolve(__dirname, docPath), docContent, function(err) {
        if (err) {
            throw err;
        }

        console.log('Hello.');
    });
}



console.log('DONE!');
