require('./src/scss/style.scss');
require('./src/js/index.js');
require('./node_modules/leaflet/dist/leaflet.css')

document.write(
  require('./src/views/app.html')
);
