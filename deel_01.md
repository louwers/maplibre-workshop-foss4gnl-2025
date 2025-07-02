# Deel 1: Ontwikkelomgeving opzetten

- [ ] Maak een fork van [de repository](https://github.com/louwers/maplibre-workshop-foss4gnl-2025).

---

- [ ] Start een GitHub Codespace.

<img width="419" alt="image" src="https://github.com/user-attachments/assets/a60f0ca1-60ab-403e-915d-13d0fe115d70" />

---

- [ ] Open de Terminal als de Codespace geladen is. Gebruik het menu als het niet automatisch opent.

<img width="479" alt="image" src="https://github.com/user-attachments/assets/cf0cfeec-63df-4a73-8128-94c9cf3aceb5" />

---

- [ ] Gebruik de terminal om een web server te starten met Python. Gebruik het volgende commando:

```
python3 -m http.server
```

Nu start een web server op poort 8000.

---

- [ ] Zorg dat je via je browser bij de web server kan.

Als het goed is krijg je een popup. Klik op 'Open in Browser':

<img width="449" alt="image" src="https://github.com/user-attachments/assets/4e018397-f623-4683-9ecc-dc103c72a2a8" />

Als je geen popup krijgt, ga naar de 'PORTS' tab en zorg dat je bij poort 8000 kan.

<img width="1385" alt="image" src="https://github.com/user-attachments/assets/b64abb4c-19df-4b8f-8744-863e53d3fa29" />

Ga naar de URL die je getoond krijgt. Als het goed is zie je nu een lijst bestanden. Dan weet je dat de web server goed werkt:

<img width="359" alt="image" src="https://github.com/user-attachments/assets/c045be80-5268-48b6-bdb1-17921d411706" />

---

We gaan nu echt beginnen met web development.

- [ ] Maak een `index.html` bestand. Dit kun je het makkelijkste doen via de sidebar.

<img width="229" alt="image" src="https://github.com/user-attachments/assets/bb27c50f-9afc-42e5-b608-7bbbdefd1776" />

Gebruik de volgende inhoud en sla het bestand op.
```html
<!doctype html>
<html>
  <head>
    <title>Mijn titel</title>
  </head>
  <body>
    <p>Hallo wereld!</p>
  </body>
</html>
```

Als je de pagina in de browser ververst zou je "Hallo wereld!" moeten zien.

---

- [ ] Maak een `main.js` bestand en laad deze in `index.html` door de volgende lijn toe te voegen aan de `head`:

```html
<script type="module" src="main.js"></script>
```

Schrijf dit in je `main.js` bestand:

```js
console.log("Ook hallo wereld vanaf Javascript!");
```

Open de developer console in je browser. Waar dit precies moet verschilt per browser.

Als je dit ziet, dan heb je succesvol je web development omgeving opgezet!

<img width="988" alt="image" src="https://github.com/user-attachments/assets/cddcb40a-1c7b-4953-a9f9-a5e7cce37923" />

---

Nu is het tijd om MapLibre GL JS toe te voegen. 

- [ ] Voeg eerst een `div` toe aan de HTML in de `body` tag:

```html
    <div id="mijnkaart"></div>
```

---

Vervolgens gaan we de JavaScript bundle laden vanaf CDN.

- [ ] Update `main.js` met de volgende code:

```
import * as maplibregl from "https://cdn.skypack.dev/maplibre-gl";

const map = new maplibregl.Map({
    container: 'mijnkaart', // container id
    style: 'https://demotiles.maplibre.org/style.json', // style URL
    center: [0, 0], // starting position [lng, lat]
    zoom: 1 // starting zoom
});
```

Dit vertelt MapLibre door een kaart te laden in het element met id `map` en we laden een simpele MapLibre stijl genaamd Demotiles.

Sla alle bestanden op, zie je al een kaart verschijnen in de browser?

---

We voegen nu nog wat CSS toe aan de pagina, MapLibre wordt gebundeld met wat CSS code die het nodig heeft voor UI elementen. Ook zorgen we dat de kaart het hele scherm in beslag neemt door het `100 vw` (view width) breed en `100 vh` (view height) hoog te maken.

- [ ] Voeg de volgende code toe aan de `head` van `index.html`:

```html
<style>
  @import url("https://esm.sh/maplibre-gl/dist/maplibre-gl.css");

  body {
    margin: 0;
  }

  #mijnkaart {
    width: 100vw;
    height: 100vh;
  }
</style>
```

---

Als het goed is zie je nu het volgende eindresultaat

<img width="1296" alt="image" src="https://github.com/user-attachments/assets/ed301d95-2f55-4617-a525-a51b25b7fa7e" />

> [!TIP]
> Voor de enthousiastelingen, probeer een stijl van [OpenFreeMap](https://openfreemap.org/quick_start/).

---

- [ ] Zorg dat je `index.html` en `main.js` commit en pushed naar de repo. Je kan hiervoor `git` in de command line gebruiken of de UI.

https://github.com/user-attachments/assets/79d99706-0daf-4c27-98e9-39bd2f4bbd26

