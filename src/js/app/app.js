'use strict';

const Map = require('./map');

module.exports = class {
  constructor (config) {
    console.log('App init');
    this.element = config.element;
    this.map = new Map();
  }

  setup () {
    console.log('App setup');
    this.map.setup();
    this.element.appendChild(this.map.element);
  }

  run () {
    console.log('App run');
  }
};
