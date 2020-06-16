let map = null;

mapboxgl.accessToken = ACCESS_TOKEN_MAPBOX;
map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [DEFAULT_LNG, DEFAULT_LAT],
	zoom: DEFAULT_ZOOM,
	attribution: '© Data <a href="https://openstreetmap.org/copyright/">OpenStreetMap</a> © Map <a href="https://mapbox.com/">Mapbox</a>'
});

map.addControl(
	new MapboxDirections ({
		accessToken: mapboxgl.accessToken,
		unit: 'metric',
		language: 'es',
		alternatives: true,
		congestion: true,
		geocoder: new MapboxGeocoder({
			accessToken: mapboxgl.accessToken,
			countries: 'py',
			mapboxgl: mapboxgl
		}),
		placeholderOrigin: 'Escriba una ciudad de origen',
		placeholderDestination: 'Escriba una ciudad de destino'
	}),
	'top-left'
);