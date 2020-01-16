const program = require('commander');
const package = require('./package.json');
const chalk = require('chalk');

program.version(package.version);

commandList = ["page"];

program
    .command('command <option> <value>')
    .description('criar um novo diretorio de paginas')
    .action((option,value) => {
        if(!commandList.includes(option)){
            console.log()
            console.log(`${chalk.red(`${option} It is not a valid command, use one of the following commands: ${chalk.blue(commandList)}`)}`);
        }

        if(option == commandList[0]){
            console.log(chalk.green("pagina gerada algum dia!"));
        }
    });

program.parse(process.argv);