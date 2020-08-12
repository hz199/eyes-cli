const commander = require('commander')
const chalk = require('chalk')
const { apply } = require('./index')
const { version } = require('../package.json')

let actionMap = {
  description: 'create a new project from a template',
  usages: [
    'eyes create [projectName]   创建项目',
    'eyes -V, --version          版本号',
    'eyes -h, --help             帮助'
  ],
  alias: 'i'
}

commander
  .command('eyes')
  .usage('create <fileName>')
  .version(version)
  .option('-h, --help', '帮助', handleHelp)
  // .option('-l, --list <items>', 'A list', list)
  .action((d: any, argvs: any) => {
    const cmdStr = argvs ? argvs[0] : ''
    switch (cmdStr) {
      case 'create':
        if (!argvs[1]) {
          throw new Error('请输入文件名')
        }
        apply('create', argvs[1])
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
