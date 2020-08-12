const commander = require('commander')
const chalk = require('chalk')
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

commander
  .command('eyes')
  .usage('create <fileName>')
  .version(version)
  // .option('-r, --range <a>..<b>', 'A range', range)
  // .option('-l, --list <items>', 'A list', list)
  .action((d: any, otherD: any) => {
    const cmdStr = otherD ? otherD[0] : ''
    switch (cmdStr) {
      case 'create':
        if (!otherD[1]) {
          throw new Error('请输入文件名')
        }
        apply('create', otherD[1])
        break
      default:
        handleHelp()
        break
  })
  .parse(process.argv)

  function handleHelp() {
    console.log(chalk.blue('\r\nUsage:'))
    actionMap.usages.forEach(item => {
      console.log(chalk.blue('  - ' + item))
    })
    console.log('\r')
  }
