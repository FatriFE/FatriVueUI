/**
 * Created by starlee on 2020/03/09.
 */
const path = require('path')
exports.alias = {
    main: path.resolve(__dirname, '../src'),
    packages: path.resolve(__dirname, '../packages'),
    examples: path.resolve(__dirname, '../examples'),
    'fatri-vue-ui': path.resolve(__dirname, '../')
}

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;
