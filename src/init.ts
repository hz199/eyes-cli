const chalk = require('chalk')
const fs = require('fs')
const symbol = require('log-symbols')
const inquirer = require('inquirer')

let init = async (...args: string[]) => {
  const currentFileName = args[0]
  console.log(currentFileName, 2222)

  if (!fs.existsSync(currentFileName)) {
    console.log('\n')
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
    console.log(symbol.error, chalk.red('项目名已存在，请换一个名字！'));
  }

  //项目不存在
  // if (!fs.existsSync(args[1])) {
  //   // 命令行交互
  //   inquirer.prompt([
  //     {
  //       name: 'description',
  //       message: 'Please enter the project description: '
  //     },
  //     {
  //       name: 'author',
  //       message: 'Please enter the author name: '
  //     }
  //   ]).then(async (result: any) => {
  //     console.log(result, 2222)
  //   })
  // } else {
  //   //项目已经存在
  //   console.log(symbol.error, chalk.red('The project already exists'));
  // }
}

module.exports = init;