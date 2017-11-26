# Webpack

Webpack es un preprocesador de archivos diseñado para procesar módulos de forma tal de generar un solo archivo (bundle) conteniendo todo el código propio y de todas las dependencias referenciadas.

## Introducción

- Ejemplo básico con `webpack.config.js`, propiedades `entry` y `output.filename`.
- Conceptos principales: *entry*, *output*, *loaders* y *plugins*.

## Instalación

```
$ npm install --save-dev webpack
```

## Ejercicio 1: Compilar dependencias

Dados los siguientes archivos en la carpeta `ejercicio1`, usar Webpack para generar un único archivo JavaScript que explícitamente incluya sus dependencias.

## Ejercicio 2: Incluir CSS e imágenes

Usar Webpack para incluir por dependencias tanto el CSS como las imágenes.

## Ejercicio 3: Usar plugins

Usando los plugins HtmlWebpackPlugin y CleanWebpackPlugin, mejorar la estructura del proyecto.

## Ejercicio 4: Habilitar opcions útiles durante el desarrollo

Habilitar los *inline source maps* y las opciones para reempaquetado automático al modificar archivos fuente (*watch*). Finalmente, instalar el *development server* provisto por Webpack.
