import * as maplibregl from "https://esm.sh/maplibre-gl";
import { Protocol } from "https://esm.sh/pmtiles";
const protocol = new Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);

const map = new maplibregl.Map({
    container: 'map', // container id
    style: './assets/style.json', // style URL
    center: [5.66509, 51.96857], // starting position [lng, lat]
    zoom: 13, // starting zoom
    maxBounds: [
        [51.9364055, 5.6058239],
        [52.0007083, 5.7243627]
    ],
    minZoom: 11,
    maxZoom: 16,
});

map.on('load', () => {
    map.addSource('wandeling', {
        type: 'geojson',
        data: './assets/wandeling.geojson'
    });

    map.addLayer({
        id: 'wandeling',
        type: 'line',
        source: 'wandeling',
        paint: {
            "line-color": [
                "interpolate",
                ["exponential", 2.5],
                ["zoom"],
                11,
                "rgb(229, 53, 176)",
                18,
                "rgb(255, 197, 241)"
            ],
            "line-dasharray": [
                "step",
                ["zoom"],
                ["literal", [3, 1]],
                16,
                ["literal", [2, 1]],
                18,
                ["literal", [2, 0]]
            ],
            "line-width": [
                "interpolate",
                ["exponential", 1.5],
                ["zoom"],
                11,
                2.5,
                20,
                12
            ]
        },
    });
});