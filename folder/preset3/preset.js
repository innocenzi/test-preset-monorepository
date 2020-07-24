const { Preset } = require('use-preset');

module.exports = Preset.make('preset3')
	.copyFiles()
	.chain()
	.edit('helloworld.txt')
	.replace('Hello')
	.with('Hewwo!');
