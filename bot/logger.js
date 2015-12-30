var winston = require('winston');

winston.emitErrs = true;

exports.ChatLog = new winston.Logger({
	transports: [
		new winston.transports.File({
			handleExceptions: false,
			name: 'file:messages',
			filename: __dirname + '/../logs/messages.txt',
			formatter: function (args) { return args.message; },
			level: 'info',
			json: false
		})
	]
});

exports.Logger = new winston.Logger({
	colors: {
		verbose: 'yellow',
		debug: 'green',
		info: 'cyan',
		warn: 'orange',
		error: 'red'
	},
	transports: [
		new winston.transports.File({
			humanReadableUnhandledException: true,
			handleExceptions: true,
			name: 'file:exceptions',
			filename: __dirname + '/../logs/exceptions.txt',
			level: 'exception',
			json: false
		}),
		new winston.transports.File({
    		handleExceptions: false,
    		name: 'file:error',
    		filename: __dirname + '/../logs/errors.txt',
    		level: 'error',
    		json: false
		}),
		new winston.transports.File({
    		handleExceptions: false,
    		name: 'file:debug',
    		filename: __dirname + '/../logs/debug.txt',
    		level: 'debug',
    		json: false
		}),
		new winston.transports.Console({
			handleExceptions: true,
			level: 'verbose',
			colorize: true,
			json: false
		})
	],
	exitOnError: true
});
