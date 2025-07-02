console.log("Importing maplibre-gl...");
import * as maplibregl from "https://esm.sh/maplibre-gl";
console.log("Successfully imported maplibre-gl!");

console.log("Rendering demo map...")
const map = new maplibregl.Map({
    container: 'mijnkaart', // container id
    style: 'https://demotiles.maplibre.org/style.json', // style URL
    center: [0, 0], // starting position [lng, lat]
    zoom: 1 // starting zoom
});
