
const initMap = () => {

  mapboxgl.accessToken = 'pk.eyJ1IjoicmFwaGFlbGF1YnJ5IiwiYSI6ImNreXd0b243dTBicTAycHF3eWl0NmFsOGsifQ.lyidIB2GZBCqpr1VUtzqEA';
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/light-v10', // style URL
    center: [8.2451, 46.6012], // starting position
    zoom: 5 // starting zoom
  });

  const coordinates = [[9, 46],[14, 46],[14, 42],[8, 43]]
  map.on('load', () => {
    // Add a data source containing GeoJSON data.
    map.addSource('maine', {
      'type': 'geojson',
      'data': {
        'type': 'Feature',
        'geometry': {
          'type': 'Polygon',
          // These coordinates outline Maine.
          'coordinates': [
            coordinates

          ]
        }
      }
    });

    // Add a new layer to visualize the polygon.
    map.addLayer({
      'id': 'maine',
      'type': 'fill',
      'source': 'maine', // reference the data source
      'layout': {},
      'paint': {
        'fill-color': '#0080ff', // blue color fill
        'fill-opacity': 0.5
      }
    });
    // Add a black outline around the polygon.
    map.addLayer({
      'id': 'outline',
      'type': 'line',
      'source': 'maine',
      'layout': {},
      'paint': {
        'line-color': '#000',
        'line-width': 3
      }
    });
  });

}

const extractCoord = () => {

}

export { initMap }
