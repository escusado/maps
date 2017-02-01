'use strict';

const Leaflet = require('leaflet');

module.exports = class {
  constructor () {
    this.element = document.createElement('div');
    this.element.classList.add('map');
    this.leaflet = L.map(this.element);
  }

  setup () {
    this.leaflet.setView([20.349559, -103.557884], 9);
    // this.leaflet.options.minZoom = 9;
    // this.leaflet.options.maxZoom = 26;


    //Base Layer
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxNativeZoom: 19,
      id: 'mapbox.satellite',
      accessToken: 'pk.eyJ1Ijoiam9hcXVpbi1za3ljYXRjaCIsImEiOiJ5aG9SVjVnIn0.He9MguxUYbZsk2tXdYPFWQ'
    }).addTo(this.leaflet);

    //myMap
    L.tileLayer('/public/myMap/{z}/{x}/{y}.png', {
      // maxNativeZoom: 22,
      // minZoom: 9,
      // maxZoom: 26
    }).addTo(this.leaflet);


  }
};
