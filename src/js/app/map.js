'use strict';

const Leaflet = require('leaflet');

module.exports = class {
  constructor () {
    this.element = document.createElement('div');
    this.element.classList.add('map');
    this.leaflet = L.map(this.element);
  }

  setup () {
    this.leaflet.setView([20.349559, -103.557884], 15);
    // this.leaflet.options.minZoom = 17;
    // this.leaflet.options.maxZoom = 22;

    //myMap
    L.tileLayer('myMap/{z}/{x}/{y}.png', {
      maxZoom: 18,
      maxNativeZoom: 21
    }).addTo(this.leaflet);

    //Base Layer
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxNativeZoom: 18,
      id: 'mapbox.satellite',
      accessToken: 'pk.eyJ1Ijoiam9hcXVpbi1za3ljYXRjaCIsImEiOiJ5aG9SVjVnIn0.He9MguxUYbZsk2tXdYPFWQ'
    }).addTo(this.leaflet);

    console.log('>>> Added mapbox');
  }
};
