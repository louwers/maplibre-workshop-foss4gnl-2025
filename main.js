import * as maplibregl from "https://esm.sh/maplibre-gl";
import { Protocol } from "https://esm.sh/pmtiles";
const protocol = new Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);

const map = new maplibregl.Map({
    container: 'map', // container id
    style: '/assets/style.json', // style URL
    center: [51.96857, 5.66509], // starting position [lng, lat]
    zoom: 1 // starting zoom
});