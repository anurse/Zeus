// Generated by CoffeeScript 1.4.0
(function() {
  var UIService, emptyCli, emptyLog;

  emptyCli = {};

  emptyLog = {
    verbose: function() {},
    info: function() {},
    warn: function() {}
  };

  module.exports = UIService = (function() {

    function UIService(cli, log) {
      this.cli = cli;
      this.log = log;
    }

    UIService.empty = new UIService(emptyCli, emptyLog);

    return UIService;

  })();

}).call(this);
