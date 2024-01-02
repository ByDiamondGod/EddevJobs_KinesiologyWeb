# Crear proyecto SASS + VITE

## Agregar en la terminal

### Paso 1:

``` sh
npm create vite@latest .
```
- Nombre de la carpeta
- Vanilla
- JavaScript

### Paso 2:

``` sh
npm i
```

### Paso 3:

``` sh
npm i -d sass
```

### Paso 4:

Borrar archivos por defecto vite

counter.js
javascript.svg
style.css
main.js
public/vite.svg

### Paso 5:

mkdir -p public/img sass/{base,components,layout,pages,themes,utilities,vendors} src/views
touch sass/main.scss src/main.js

### Paso 6:

Cambiar la ruta del index.html la parte de scr/main.js

### Paso 7:

``` sh
npm run dev
```