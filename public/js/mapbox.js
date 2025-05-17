/* eslint-disable */
export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYWxpbWd1bmF3YW4iLCJhIjoiY21hbWpiZGNoMGw1OTJxb2JwbG9tcTZmdiJ9.ugqMWaMzbm5xPQKjqijiug';
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/alimgunawan/cmamjz3ua015c01si5ccjajov',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      anchor: 'bottom',
      element: el,
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({ offset: 30 })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 150,
      bottom: 150,
      left: 50,
      right: 50,
    },
  });
};
