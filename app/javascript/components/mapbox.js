const initMap = () => {
  //Map instanciation
  mapboxgl.accessToken = 'pk.eyJ1IjoicmFwaGFlbGF1YnJ5IiwiYSI6ImNreXd0b243dTBicTAycHF3eWl0NmFsOGsifQ.lyidIB2GZBCqpr1VUtzqEA';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [8.2451, 46.6012],
    zoom: 5
  });

  map.on('load', () => {

    const sources = document.querySelectorAll(".polygon")

    sources.forEach(source => {
      // Add a data source containing GeoJSON data.
      map.addSource(source.dataset.id, JSON.parse(source.dataset.polygon))
      console.log(source)
      // Add a new layer to visualize the polygon.
      map.addLayer({
        'id': 'fill' + source.dataset.id,
        'type': 'fill',
        'source': source.dataset.id, // reference the data source
        'layout': {},
        'paint': {
          'fill-color': '#0080ff',
          'fill-opacity': 0.5
        }
      });
      // Add a black outline around the polygon.
      map.addLayer({
        'id': 'line' + source.dataset.id,
        'type': 'line',
        'source': source.dataset.id,
        'layout': {},
        'paint': {
          'line-color': '#000',
          'line-width': 3
        }
      });
    });
  })

}

const getFeature = () => {
  return document.querySelector(".polygon").dataset.polygon
}

const getFeatureID = () => {
  return document.querySelector(".polygon").dataset.id
}

export { initMap }
