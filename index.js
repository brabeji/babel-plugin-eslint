var CLIEngine = require("eslint").CLIEngine;
var cli = new CLIEngine();
var formatter = cli.getFormatter();

module.exports = function (babel) {
	return {
		visitor: {
			Program: function (path, pluginPass) {
				var source = pluginPass.file.code;
				var filename = pluginPass.file.parserOpts.filename;
				var report = cli.executeOnText(source, filename);
				var lintResult = formatter(report.results);
				if(lintResult) {
					console.log(lintResult);
				}
			}
		}
	};
};
