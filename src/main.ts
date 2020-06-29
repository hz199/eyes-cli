import commander from 'commander'

const { apply } = require('./index')
const { version } = require('../package.json')

let actionMap = {
  description: 'create a new project from a template',
  usages: [
    'eyes create [projectName]',
    'eyes --help',
    'eyes -V'
  ],
  alias: 'i'
}

commander.command('create')
  .alias(actionMap.alias)
  // .option('--template <n>', 'An integer argument', handleTemplate)
  .option('-h,--help', 'help')
  .description(actionMap.description)
  .version(version, '-V --version')
  // 回调函数
  .action(() => {
    const cmdStr = process.argv.slice(2)[0]
    switch (cmdStr) {
      case 'create':
        apply('create', ...process.argv.slice(3))
        break
      default:
        handleHelp()
        break
    }
  })
  .usage('<command> [options]')
  .parse(process.argv)

function handleHelp() {
  console.log('\r\nUsage:')
  actionMap.usages.forEach(item => {
    console.log('  - ' + item)
  })
  console.log('\r')
}
