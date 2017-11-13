'use strict';

const path = require('path');
const ZwaveDriver = require('homey-zwavedriver');

// http://www.pepper1.net/zwavedb/device/430

module.exports = new ZwaveDriver(path.basename(__dirname), {
	capabilities: {
		alarm_contact: [
			{
				command_class: 'COMMAND_CLASS_BASIC',
				command_report: 'BASIC_SET',
				command_report_parser: report => report.Value === 255,
			},
		]
	},
	settings: {
		input_alarm_cancellation_delay: {
			index: 1,
			size: 2,
			signed: false,
		}
	},
});
