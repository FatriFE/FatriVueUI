# @fatrife/vue-ui
一套使用 Vue 搭建的 UI 组件库

# 开发文档说明

## 开发准备
* Fork 代码到自己的仓库。 [仓库地址](https://github.com/FatriFE/FatriVueUI)
* clone 自己的代码到本地准备开发。
* 安装依赖。
* 新加一个组件需要使用 Make 命令，需要在本地提前安装 [Windows下载 make 的 GUN 工具](http://gnuwin32.sourceforge.net/packages/make.htm).  



## 项目说明
### 项目结构
```
 -build                     用于项目构建
 -examples                  项目文档目录
 -packages                  存放组件目录
 -src                       组件库打包入口目录
 -babelrc                   babel 配置
 -.gitignore                gitignore
 -CHANGELOG.MD              更新日志
 -commitlint.config.js      git 提交规范配置
 -components.json           里面含有所有的组件和对应的源码位置
 -LICENSE                   许可证书文件
 -Makefile                  make 构建脚本文件
 -package.json              包文件说明
 -README.md                 项目说明文件
```

### 脚本说明
#### scripts 脚本
* bootstrap   用于安装项目依赖
* build:file  1. 用于新建组件后插入该组件到 src 的入口文件中  2. 用于更新组件文档
* dev         用于在本地环境预览组件文档。
* dist        用于把开发完成的组件打包成umd、CommonJS、 Component 拆分形式。 打包好的文件 lib 可以直接发布到 npm 上面用于共享
* dist:umd    打包 UMD 格式
* dist:common 打包 CommonJS 格式
* dist:com    打包组件拆分格式
* release     用于更新版本和更新日志

#### make 命令
* make new  Button 按钮 StarLee   用于新生成一个组件， 并初始化组建的源码结构、组件文档


## 如何新开发一个组件
* 使用 make 命令初始化新的组件在 packages 目录中的目录和文件内容。
```bash
make new Button 按钮 用户名(例如 Star lee)
```
* 使用 doc 形式来调试组件 examples/docs/zh-CN。
* 编写完成版的组件文档。
* 提交代码到自己的分支。
* PR 分支到 Fork 的项目 (dev) （https://github.com/FatriFE/FatriVueUI）
