const chalk = require('chalk')
const fs = require('fs')
const symbol = require('log-symbols')
const inquirer = require('inquirer')

let init = async (...args: string[]) => {
  const currentFileName = args[0]
  console.log(currentFileName, 2222)

  if (!fs.existsSync(currentFileName)) {
    console.log('')
    inquirer.prompt([
      {
        name: 'description',
        message: '请填写项目描述: '
      },
      {
        name: 'author',
        message: '请填写项目作者: '
      }
    ]).then(async (result: any) => {
      console.log(result, 3333)
    })
  } else {
    console.log(symbol.error, chalk.red('项目名已存在，请换一个名字！'))
  }
}

module.exports = init