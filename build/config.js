/**
 * Created by starlee on 2020/03/09.
 */
const path = require('path')
const Components = require('../components.json')

const  externals = {}
Object.keys(Components).forEach(function(key) {
  externals[`fatri-vue-ui/packages/${key}`] = `fatri-vue-ui/lib/${key}`
});

exports.externals = externals

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
  'fatri-vue-ui': path.resolve(__dirname, '../')
}

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/
