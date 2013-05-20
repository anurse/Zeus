var path = require('path');

require('source-map-support').install();
global.assert = require('chai').assert;
global.sinon = require('sinon');

var libname = process.env['ZEUS_COV'] ? 'lib-cov' : 'lib'
global.libpath = path.resolve(path.join(__dirname, '..', libname));

global.apprequire = function(libname) {
	// if(!libname.match(/.*\.js/)) {
	// 	libname += '.js'
	// }
	return require(path.join(libpath, libname));
}