// Generated by CoffeeScript 1.4.0
(function() {
  var Context, Environment, ServiceTypeRegex, UIService, async, findPlugins, fs, parseServiceType, path, winston, _,
    __hasProp = {}.hasOwnProperty;

  fs = require('fs');

  path = require('path');

  _ = require('underscore');

  winston = require('winston');

  async = require('async');

  UIService = require('./ui');

  Environment = require('./Environment');

  ServiceTypeRegex = /([^\.]*)\.(.*)/;

  findPlugins = function(services) {
    return _.uniq(_.filter(_.map(services, function(value, key, list) {
      return parseServiceType(value.type).plugin;
    }), _.isString));
  };

  parseServiceType = function(serviceType) {
    var m;
    if (m = serviceType.match(ServiceTypeRegex)) {
      return {
        plugin: m[1],
        name: m[2]
      };
    } else {
      return {};
    }
  };

  module.exports = Context = (function() {

    function Context(zeusfile, path, ui) {
      this.zeusfile = zeusfile;
      this.path = path;
      this.ui = ui || UIService.empty;
      this.plugins = {};
    }

    Context.prototype.check = function() {
      var key, _ref, _results;
      _ref = this.zeusfile.services;
      _results = [];
      for (key in _ref) {
        if (!__hasProp.call(_ref, key)) continue;
        if (!this.plugins.hasOwnProperty(parseServiceType(this.zeusfile.services[key].type).plugin)) {
          _results.push({
            type: 'missing_plugin',
            name: type.plugin,
            service: name
          });
        }
      }
      return _results;
    };

    Context.prototype.provision = function(env, serviceName, callback) {
      var service, type;
      service = this.zeusfile.services[serviceName];
      type = parseServiceType(service.type);
      if (this.plugins.hasOwnProperty(type.plugin)) {
        return this.plugins[type.plugin].provision(this.zeusfile, env, type.name, service, env.services[serviceName], callback);
      } else {
        return callback(new Error("No plugin for '" + service.type + "'"));
      }
    };

    Context.prototype.createEnvironment = function(name, callback) {
      var _this = this;
      return this.collectGlobalConfiguration(function(err, config) {
        return async.mapSeries(Object.keys(_this.zeusfile.services), function(key, callback) {
          var service, type;
          service = _this.zeusfile.services[key];
          type = parseServiceType(service.type);
          if (_this.plugins.hasOwnProperty(type.plugin)) {
            return _this.plugins[type.plugin].createServiceInstance(_this.zeusfile, name, service, key, type.name, function(err, instance) {
              if (err) {
                return callback(err);
              } else {
                return callback(null, {
                  serviceName: key,
                  instance: instance
                });
              }
            });
          } else {
            return callback();
          }
        }, function(err, instances) {
          var env, instance, services, _i, _len;
          if (err) {
            return callback(err);
          } else {
            services = {};
            for (_i = 0, _len = instances.length; _i < _len; _i++) {
              instance = instances[_i];
              services[instance.serviceName] = instance.instance;
            }
            env = new Environment(self.zf.name, name, services, config);
            return callback(null, env);
          }
        });
      });
    };

    Context.prototype.collectGlobalConfiguration = function(callback) {
      var config, pluginNames,
        _this = this;
      pluginNames = findPlugins(this.zeusfile.services);
      config = {};
      self.ui.log.info('collecting global configuration information...');
      return async.eachSeries(pluginNames, function(pluginName, callback) {
        if (_this.plugins.hasOwnProperty(pluginName)) {
          return _this.plugins[pluginName].collectGlobalConfiguration(function(err, pluginConfig) {
            if (err) {
              return callback(err);
            } else {
              config[pluginName] = pluginConfig;
              return callback();
            }
          });
        } else {
          return callback();
        }
      }, function(err) {
        return callback(err, config);
      });
    };

    Context.prototype.loadPlugins = function(dir, callback) {
      var _ref,
        _this = this;
      if (typeof dir === 'function') {
        _ref = [dir, path.join(__dirname, 'plugins')], callback = _ref[0], dir = _ref[1];
      }
      self.ui.log.verbose('scanning ' + dir + ' for plugins');
      return fs.readdir(dir, function(err, files) {
        var file, _i, _len;
        if (err) {
          return callback(err);
        } else {
          for (_i = 0, _len = files.length; _i < _len; _i++) {
            file = files[_i];
            if (path.extname(file) === '.js') {
              _this.loadPlugin(path.join(dir, file));
            }
          }
          return callback();
        }
      });
    };

    Context.prototype.save = function(callback) {
      var issue, issues, str, _i, _len;
      issues = this.check();
      if (issues.length > 0) {
        for (_i = 0, _len = issues.length; _i < _len; _i++) {
          issue = issues[_i];
          if (!(issue.type === 'missing_plugin')) {
            continue;
          }
          this.ui.log.warn("plugin for '" + issue.name + "' could not be found");
          this.ui.log.warn(" you will not be able to work with the '" + issue.service + "' service");
        }
      }
      str = JSON.stringify(this.zeusfile.cryofreeze(), null, 2);
      this.ui.log.verbose('writing Zeusfile: ' + self.path);
      return fs.writeFile(this.path, str, callback);
    };

    Context.prototype.loadPlugin = function(path) {
      return require(path).attach(this, this.ui);
    };

    return Context;

  })();

}).call(this);
