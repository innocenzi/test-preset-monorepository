const { Preset } = require('use-preset');

module.exports = Preset.make('preset2')
	.copyFiles()
	.chain()
	.edit('helloworld.txt')
	.replace('Hello')
	.with('Hewwo');
