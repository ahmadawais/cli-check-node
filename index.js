const currentNodeVersion = process.versions.node;
const semver = currentNodeVersion.split('.');
const major = semver[0];
const sym = require('log-symbols');
const chalk = require('chalk');

/**
 * Cli Check Node.
 *
 * @param {String} requiredNodeVersion
 */
module.exports = requiredNodeVersion => {
	if (major < requiredNodeVersion) {
		console.error(
			`
${sym.error} ${chalk.red(`Node version issue!`)}

You are running Node version: ${chalk.red(currentNodeVersion)}
Required version of Node is: ${chalk.green(requiredNodeVersion)} or higher.

${sym.info} Please update your version of Node.
${sym.info} https://nodejs.org/en/download/\n`
		);
		process.exit(1);
	}
};
