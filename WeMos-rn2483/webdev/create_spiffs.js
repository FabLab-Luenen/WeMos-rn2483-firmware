// ======================================================================
//                ESP8266 create SPIFFS WEB server files script
// ======================================================================
// This file is not part of web server, it's just used as ESP8266 SPIFFS
// WEB server files preparation tool
// Please install dependencies with
// npm install zlib
// after all is installed just start by typing on command line
// node create_spiffs.js
// once all is fine, you can upload data tiles with Arduino IDE
// ======================================================================

var zlib = require('zlib');
var fs = require('fs');
var exec = require('child_process').exec, child;

function copyCreate(file, compress) {
	var dest = "../data/"+file
	if (compress) dest += '.gz'
	var inp = fs.createReadStream(file);
	var out = fs.createWriteStream(dest);

	if (compress) {
		var gzip = zlib.createGzip();
		console.log('Compressing '+file+' to '+dest);
		inp.pipe(gzip).pipe(out);
	} else {
		console.log('Copying '+file+' to '+dest);
		inp.pipe(out);
	}
}

// Excluded file seen from editor
copyCreate('.exclude.files');

copyCreate('js/mousewheel.js',true);
copyCreate('js/terminal.js',true);
copyCreate('js/jquery-1.12.3.js',true);
copyCreate('js/reconn-ws.js',true);
copyCreate('css/terminal.css',true);
copyCreate('index.htm');
copyCreate('edit.htm');
copyCreate('favicon.ico');
copyCreate('startup.ini');
copyCreate('rn2483-cfg.txt');
copyCreate('rn2483-ttn-otaa.txt');

// Local ACE editor
copyCreate('ace.js.gz');
copyCreate('ext-searchbox.js.gz');
copyCreate('mode-css.js.gz');
copyCreate('mode-html.js.gz');
copyCreate('mode-javascript.js.gz');
copyCreate('worker-html.js.gz');

console.log('finished!, upload to target from Arduino IDE');



