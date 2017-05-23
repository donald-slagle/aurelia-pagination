System.register(['aurelia-pal'], function (_export) {
  'use strict';

  var PLATFORM;

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.globalResources(PLATFORM.moduleName('./pagination/pagination'));
  }

  return {
    setters: [function (_aureliaPal) {
      PLATFORM = _aureliaPal.PLATFORM;
    }],
    execute: function () {}
  };
});