import { features } from './popup-data.js';

mapboxgl.accessToken = 'pk.eyJ1IjoicWNveWxlIiwiYSI6ImNrdXBydnF0ZDBscm4yeHBnZmkwdm15MmEifQ.xhgKU0DtBHlzyuwygiseOA';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v11',
    center: [-118.3010148, 36.5784983],
    zoom: 5.5
});

map.on('load', () => {
    map.addSource('places', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': features
        }
    });

    map.addLayer({
        'id': 'places',
        'type': 'symbol',
        'source': 'places',
        'layout': {
            'icon-image': '{icon}',
            'icon-allow-overlap': true
        }
    });

    map.on('click', 'places', (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .setMaxWidth('35%')
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer
    map.on('mouseenter', 'places', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves
    map.on('mouseleave', 'places', () => {
        map.getCanvas().style.cursor = '';
    });
    map.addControl(new mapboxgl.NavigationControl());
});