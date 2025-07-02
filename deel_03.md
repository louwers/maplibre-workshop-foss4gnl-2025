## Deel 3: PMTiles Extract maken van Wageningen

Voor deze workshop willen we de kaartdata zelf hosten. Een PMTiles bestand met kaartdata van de hele wereld is ongeveer 120GB. Dat is te veel om met GitHub te deployen, en we zijn helemaal niet geïnteresseerd in de hele wereld, alleen het gebied rondom Wageningen.

In dit deel gaan we daarom een extract maken van het PMTiles bestand dat Protomaps ter beschikking steld.

---

De PMTiles CLI (command line interface) is al geïnstalleerd in je ontwikkelomgeving.

- [ ] Zoek de documentatie op van de PMTiles CLI, lees de documentatie van [`pmtiles extract`](https://docs.protomaps.com/pmtiles/cli#extract).

Zoals je ziet heb je de bbox nodig van Wageningen.

---

- [ ] Zoek uit wat de bbox van Wageningen is.

Er zijn veel wegen die naar Rome (of Wageningen) leiden. 

Je kunt bijvoorbeeld de [OSM relatie](https://www.openstreetmap.org/relation/418758) opzoeken en de volgende [Overpass query gebruiken](https://overpass-ultra.trailsta.sh/):
```
[out:json];
rel(334228);
out bb;
```

Je kunt ook de website http://bboxfinder.com/ gebruiken (er is geen https), zoom naar Wageningen, zet de EPSG code op 4326 (ipv 3857), klik het vierkant icoon, teken een bbox en kopieër deze in de "lon,lat,lon,lat" volgorde.

---

- [ ] Zoek uit wat de laatste URL is van Protomaps. Ga hiervoor naar https://maps.protomaps.com/builds/

<img width="464" alt="image" src="https://github.com/user-attachments/assets/a05b37e8-7740-4de1-a177-ed84b467be55" />


---

- [ ] In de terminal: maak een directory 'assets' en ga daarin. Maak vervolgens daar het bestand `wageningen.pmtiles`:

```
mkdir assets
cd assets
pmtiles extract <laatste PMTiles URL> wageningen.pmtiles --minzoom=10 --maxzoom=16 --bbox=<antwoord van stap 1>

pmtiles extract https://build.protomaps.com/20250629.pmtiles wageningen.pmtiles --minzoom=10 --maxzoom=16 --bbox=5.6058239,51.9364055,5.7243627,52.0007083
```

---

- [ ] Download `wageningen.pmtiles` en inspecteer het bestand.

Drag and drop je PMTiles-bestand in de [PMTiles Viewer](https://pmtiles.io/) om te controleren of het extracten gelukt is. Daartoe moet je het bestand (paar MB) even downloaden naar je computer: rechtermuis op bestand, dan `Download...`.

<img width="1483" alt="image" src="https://github.com/user-attachments/assets/47b1667a-bb28-48bf-8b01-e99a9c2cc1d8#gh-light-mode-only" />

<img width="1483" alt="image" src="https://github.com/user-attachments/assets/a6e697c7-038f-4840-98f2-936c27f7faad#gh-dark-mode-only" />

---

- [ ] Maak een commit met `wageningen.pmtiles` en push het bestand naar je fork.

Gebruik de UI of de commandline (altijd sneller!):

```
# Keer terug naar je 'home' directory vanuit assets
cd ..

# 'Stage' het bestand
git add assets/wageningen.pmtiles

# 'Commit' het bestand met commentaar (-m)
git commit -m "Add wageningen.pmtiles"

# 'Push' het bestand
git push
```

Zodra het bestand is gepushed zou het online moeten zijn, omdat je je GitHub repository als website hebt gepubliceerd in deel 2. Dat kan soms even duren. 

---

- [ ] Check of je via je browser bij het PMTiles-bestand kan dat je hebt gemaakt.

Ga naar https://maps.protomaps.com/ en laad de volgende URL:

```
https://<jouw github username>.github.io/maplibre-workshop-foss4gnl-2025/assets/wageningen.pmtiles
```

Klik op 'fit bounds'. Als het goed is zie je nu het volgende:

<img width="1378" alt="image" src="https://github.com/user-attachments/assets/a6b10049-f4af-4eb3-9626-7408222d8257" />

---

- [ ] Sla de Protomaps basemap style in je repo.

Klik nu op "Get style JSON", kopiëer de de MapLibre stijl van Protomaps Light en sla deze op als `assets/style.json`. We gaan deze in Deel 5 gebruiken. Vergeet niet een commit te maken!
