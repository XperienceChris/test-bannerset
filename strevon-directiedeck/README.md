# Strevon — B2B Kwartaalplan Q4 2026 (directiedeck)

Besluitvormingsdeck voor directie/MT, gebouwd op de Bryfr-analyse van 03-09-2026
(`strevon_20260903_1515.json`) en de werkpakketten-export (`werkpakketten20260903.csv`).

## Bekijken

Open `index.html` direct in een browser (dubbelklikken, of sleep het bestand in
Chrome/Edge/Safari). Geen server, build-stap of internetverbinding nodig.

- **Navigeren:** pijltjestoetsen ← → of spatie, of de knoppen onderin.
- **16:9-canvas** dat automatisch schaalt naar elk schermformaat.

## Exporteren naar PDF

1. Open `index.html` in Chrome (geeft de beste printresultaten).
2. Klik op de knop **⤓ PDF** rechtsonder, of gebruik `Cmd/Ctrl + P`.
3. Kies bij "Bestemming" → **Opslaan als PDF**.
4. Zet **Layout op Liggend (Landscape)** en **marges op Geen/Minimaal**.
5. Elke slide komt op een eigen pagina, precies zoals op het scherm.

## Exporteren naar PowerPoint

Er is geen aparte PPTX-generator gebouwd (dit is bewust een standalone HTML-deck,
zodat er geen build-tooling nodig is). De snelste route naar `.pptx`:

1. Exporteer eerst naar PDF via bovenstaande stappen.
2. Importeer de PDF in PowerPoint (**Invoegen → Dia's van bestand**) of gebruik
   een converter als Adobe Acrobat / Smallpdf. Elke pagina wordt dan één dia.

## Wat is aangepast t.o.v. "verzin niets"

- Alle inhoud (cijfers, citaten, prioriteiten, werkpakketten) komt rechtstreeks
  uit de twee brondocumenten.
- Waar iets een voorstel/extrapolatie is in plaats van een letterlijk gegeven
  (dagen 31–90 van het kwartaalplan, het budgetbedrag van €10.000), staat een
  `nog te valideren`-label op de slide.
- De visuele stijl (kleuren, typografie) is een **interpretatie** van een
  zakelijke, technische B2B-uitstraling passend bij Strevon — de site
  www.strevon.nl kon niet automatisch geraadpleegd worden vanuit deze sessie
  (netwerkrestrictie). Vervang eventueel de kleuren in `index.html` (CSS-variabelen
  bovenaan het bestand, sectie `:root`) zodra je de exacte huisstijl (kleuren,
  logo, lettertype) hebt.

## Bestandsstructuur

```
strevon-directiedeck/
├── index.html   # het volledige deck (HTML/CSS/JS, geen dependencies)
└── README.md    # dit bestand
```
