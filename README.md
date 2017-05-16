# INSTRUCCIONES DE USO

Descarguen todo el proyecto o clonen el repositorio (de preferencia clonenlo).

Tienen que instalar Node.JS (version 6 o mayor) y luego tienen que usar el comando `npm install` dentro de la carpeta del proyecto para instalar las dependencias. 

Luego que tengan las dependencias, en la carpeta principal esta el archivo `server.js` que es el que inicia el servidor usando el comando `node server.js`. 

El proyecto esta configurado para correr un servidor de Node.js que tiene un API para realizar transacciones con MongoDB usando Mongoose. La base de datos ya esta creada y alojada en `mlab.com` para que usemos la misma. Los modelos y schemas ya estan creados.

Dentro de la carpeta `./src` esta un aplicación en Angular2 como front-end, no tiene nada aún, solo las dependencias que hasta ahora solo es `Angular-Material`.
En `./src` es donde se realiza toda la programación del front-end y pueden probar la parte visual usando `ng serve`.

La carpeta `./dist` es donde esta compilado el front-end, esa carpeta se auto genera con el comando `ng build`. Este último hay que hacerlo cada vez que se prueba la base de datos con el front-end.

Al lanzar el servidor de Node.js con `node server.js` el proyecto apunta directamente a la carpeta `./dist` y así se puede probar todo de un solo. Si usan solo `ng serve` no les va a cargar nada en la base de datos, solo se puede probar la parte visual.

# TcuAj

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
