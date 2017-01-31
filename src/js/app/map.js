'use strict';

const Leaflet = require('leaflet');

module.exports = class {
  constructor () {
    this.element = document.createElement('div');
    this.element.classList.add('map');
    this.leaflet = L.map(this.element);
  }

  setup () {
    this.leaflet.setView([-122.4106433,  37.7744882], 17);
    this.leaflet.options.minZoom = 17;
    this.leaflet.options.maxZoom = 22;

    L.tileLayer('http://localhost:8080/public/myMap/{z}/{x}/{y}.png').addTo(this.leaflet);
  }
};
