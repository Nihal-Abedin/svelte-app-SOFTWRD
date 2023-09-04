<!-- Map.svelte -->

<script>
	import { onMount } from 'svelte';
	import GeoJSON from 'ol/format/GeoJSON';
	import VectorLayer from 'ol/layer/Vector';
	import VectorSource from 'ol/source/Vector';
	import Map from 'ol/Map';
	import View from 'ol/View';
	import TileLayer from 'ol/layer/Tile.js';
	import OSM from 'ol/source/OSM.js';
	import { Fill, Stroke, Style } from 'ol/style';
	// 90.440813, 23.7031439

	let map;
	const mapLayer = new TileLayer({ source: new OSM() });
	const mapStyle = new Style({
		fill: new Fill({
			color: 'rgb(0,106,78,0.75)'
		}),
		stroke: new Stroke({
			color: '#000',
			width: 0.5
		})
	});
	const mapGeoJson = new VectorLayer({
		source: new VectorSource({
			format: new GeoJSON(),
			url: '../../../src/countries.geojson'
		}),
		style: [mapStyle]
	});

	onMount(() => {
		map = new Map({
			layers: [mapLayer, mapGeoJson],
			view: new View({
				center: [90.440813, 23.7031439],
				zoom: 5
			}),
			target: 'map'
		});
	});
</script>

<main id="map" class="h-screen w-full" />
