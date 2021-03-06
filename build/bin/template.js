/**
 * Created by starlee on 2020/03/09.
 */
const path = require('path')
const templates = path.resolve(process.cwd(), './examples/pages/template')

const chokidar = require('chokidar')
const watcher = chokidar.watch([templates])

watcher.on('ready', function() {
  watcher.on('change', function() {
    exec('npm run i18n')
  })
})

function exec(cmd) {
  return require('child_process')
    .execSync(cmd)
    .toString()
    .trim()
}
