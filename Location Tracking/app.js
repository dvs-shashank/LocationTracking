import "https://api.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.js"
const stoppedLocations = [
  [
    78.4867,
    17.385
  ],
  [
    78.2,
    18.5
  ],
  [
    79.2,
    17.5
  ]
]

const coordinates = [
    [
      78.4867,
      17.385
    ],
    [
      78.4867,
      17.385
    ],
    [
      78.4867,
      17.5
    ],
    [
      78.4867,
      17.5
    ],
    [
      79.2,
      17.5
    ],
    [
      79.2,
      17.5
    ],
    [
      79.2,
      18.5
    ],
    [
      79.2,
      18.5
    ],
    [
      78.2,
      18.5
    ]
  ]
  mapboxgl.accessToken = 'pk.eyJ1IjoiZHZzLXNoYXNoYW5rIiwiYSI6ImNrYzd5NmZpMDBwenMzMm54aWxjOXBtaHcifQ.l1aACMSznjan0-LOOF_Q4A';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [
    78.4867,
    17.385
  ],
zoom: 7
});
for (var i = 0; i < stoppedLocations.length; i++) {
  var long = stoppedLocations[i][0];
  var lat = stoppedLocations[i][1];
  console.log(long,"Longitute");
  console.log(lat,"latitude")

  var marker = new mapboxgl.Marker()
  .setLngLat([
    long,
    lat
  ])
  .addTo(map);
}

map.on('load', function() {
    map.addSource('route', {
    'type': 'geojson',
    'data': {
    'type': 'Feature',
    'properties': {},
    'geometry': {
    'type': 'LineString',
    'coordinates': coordinates
    }
    }
    });
    map.addLayer({
    'id': 'route',
    'type': 'line',
    'source': 'route',
    'layout': {
    'line-join': 'round',
    'line-cap': 'round'
    },
    'paint': {
    'line-color': '#888',
    'line-width': 8
    }
    });
    });