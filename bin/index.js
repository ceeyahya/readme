#! /usr/bin/env node
const fs = require('fs');
const { fsw, few, dsw, ds } = require('../content');

const args = process.argv.slice(2);

if (!args.length) {
	console.error(
		"[Error] Couldn't create the README.md file you likely forgot to enter the category."
	);
	process.exit(1);
}

if (args.length > 1) {
	console.error(
		'[Error] Expected 1 argument got more instead (You only need to pass the category)'
	);
	process.exit(1);
}

const createStream = fs.createWriteStream('README.md');
createStream.end();

switch (args[0]) {
	case 'fsw':
		fs.appendFile('README.md', fsw, function (err) {
			if (err) throw err;
			console.log('✓ Saved!');
		});
		break;
	case 'few':
		fs.appendFile('README.md', few, function (err) {
			if (err) throw err;
			console.log('✓ Saved!');
		});
		break;
	case 'dsw':
		fs.appendFile('README.md', dsw, function (err) {
			if (err) throw err;
			console.log('✓ Saved!');
		});
		break;
	case 'ds':
		fs.appendFile('README.md', ds, function (err) {
			if (err) throw err;
			console.log('✓ Saved!');
		});
		break;

	default:
		break;
}
