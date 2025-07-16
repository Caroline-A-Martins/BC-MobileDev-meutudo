import chalk from "chalk";
import logSymbols from "log-symbols";

// console.log(chalk.blue("Hellou World!"));
// console.log(chalk.blue.bgMagenta.bold("Hellou World!"));
console.log(chalk.magenta.bgCyanBright.italic("Hellou World!"));

//console.log(logSymbols.success,"Sucesso!");

console.log(logSymbols.success,chalk.green.italic("Sucesso!"));
console.log(logSymbols.error,chalk.red.italic("Falha"));
