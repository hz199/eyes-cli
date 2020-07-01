const chalk = require('chalk')
const fs = require('fs')
const symbol = require('log-symbols')
const inquirer = require('inquirer')
const ora = require('ora')
const config = require('./utils/config')
const { downloadGit } = require('./utils/downloadGit')

let init = async (...args: string[]) => {
  const currentFileName = args[0]

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
      },
      // {
      //   name: 'template',
      //   message: '请选填写其他模板项目地址: '
      // }
    ]).then(async (result: any) => {
      console.log('')
      let loading = ora(chalk.blue('downloading template ...'))
      loading.start()

      const gitTemplat = config.templateGitUrl
      // console.log(gitTemplat)

      downloadGit(gitTemplat, currentFileName).then(() => {
        loading.succeed()
        const fileName = `${currentFileName}/package.json`
        if (fs.existsSync(fileName)) {
          const data = fs.readFileSync(fileName).toString()
          let json = JSON.parse(data)
          json.name = currentFileName
          json.author = result.author
          json.description = result.description

          fs.writeFileSync(fileName, JSON.stringify(json, null, '\t'), 'utf-8')
          console.log('')
          console.log(symbol.success, chalk.green('项目创建已完成!'));
        }
      }).catch((err: any) => {
        loading.fail()
        throw err
      })
    })
  } else {
    console.log('')
    console.log(symbol.error, chalk.red('项目名已存在，请换一个名字！'))
  }
}

module.exports = init