
const initMap = () => {

  mapboxgl.accessToken = 'pk.eyJ1IjoicmFwaGFlbGF1YnJ5IiwiYSI6ImNreXd0b243dTBicTAycHF3eWl0NmFsOGsifQ.lyidIB2GZBCqpr1VUtzqEA';
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/light-v10', // style URL
    center: [8.2451, 46.6012], // starting position
    zoom: 5 // starting zoom
  });

  const coordinates = [[9, 46],[14, 46],[14, 42],[8, 43]]
  console.log(coordinates)
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
extractCoord();
}

const extractCoord = () => {
  const polygons = document.querySelectorAll(".polygon")
  polygons.forEach((polygon => {
    console.log(polygon.dataset.polygon)

    const coord = polygon.dataset.polygon
    const regex = /(POLYGON [()]{2}|[))]{2})|[,]/mg;
    const subst = ``;
    const result = coord.replace(regex, subst);
    console.log(result)


    const regex2 = /[,]/g;
    const subst2 = ``;
    const result2 = result.replace(regex2, subst2);
    console.log(result2)

    const regex3 = /([0-9]*[.][0-9] [0-9]*[.][0-9])/g;
    const subst3 = ``;

    const finals = []

    //loop in the
    const text = result2.match(regex3)

    console.log(text[0])
    finals.push(text[0])
    console.log(finals)

    result2.replace(regex3, subst3);

    console.log(result2)


  }))
}

export { initMap }
