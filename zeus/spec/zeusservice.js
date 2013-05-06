var assert = require('chai').assert,
	path = require('path'),
	sinon = require('sinon'),
	ZeusService = require('../lib/zeusservice.js'),
	ConfigSetting = require('../lib/configsetting.js');

describe('ZeusService', function() {
	describe('#constructor', function() {
		it('should initialize config', function() {
			assert.isNotNull(new ZeusService('foo').config);
		});
		it('should initialize type', function() {
			assert.equal(new ZeusService('foo').type, 'foo');
		});
	});
	describe('.toJSON', function () {
		it('should return a simple ZeusService', function() {
			var service = new ZeusService('thingy');
			service.config.foo = new ConfigSetting('{{bar}}', false);
			
			assert.deepEqual(ZeusService.toJSON(service), { type: 'thingy', config: { 'foo': {template: '{{bar}}', required: false} }});
		});
	});
	describe('.fromJSON', function () {
		it('should load the type and empty config from type only', function() {
			var service = ZeusService.fromJSON({type: 'app'});
			
			assert.instanceOf(service, ZeusService);
			assert.equal(service.type, 'app');
			assert.isNotNull(service.config);
		});
		it('should revive services', function() {
			var service = ZeusService.fromJSON({type: 'app', config: { 'foo': {template: '{{bar}}', required: false} }});
			
			assert.instanceOf(service, ZeusService);
			assert.equal(service.type, 'app');
			assert.isNotNull(service.config);
			assert.isDefined(service.config.foo);
			assert.instanceOf(service.config.foo, ConfigSetting);
			assert.equal(service.config.foo.template, '{{bar}}');
			assert.isFalse(service.config.foo.required);
		});
	});
});