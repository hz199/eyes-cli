const { apply } = require('./index')
const program = require('commander')
const { version } = require('../package.json')

let actionMap = {
  description: 'create a new project from a template',
  usages: [
    'eyes init templateName projectName'
  ],
  alias: 'i'
}

program.command('init')
  .alias(actionMap.alias)
  // .option('--template <n>', 'An integer argument', handleTemplate)
  .description(actionMap.description)
  .action(() => {
    apply('init', ...process.argv.slice(3))
  })

// function handleTemplate() {
//   console.log('template:----')
// }

program.usage('<command> [options]');
program.version(version, '-V --version').parse(process.argv);