# Descripción de la organización del proyecto

El proyecto contiene tanto el front como el back. El front se encuentra en la carpeta raíz, toda la lógica del servidor está en la carpeta `./server`. Dentro de esta carpeta se encuentran las instrucciones para poner el servidor en marcha en el archivo `./server/README.md`.

La instalación y puesta en marcha del frontal se encuentra en el `README.md` actual.

Se recomienda poner a funcionar primero el servidor.

# Instrucciones de instalación

## Requisitos

* Debe estar levantado el servidor para poder consumir los datos.

## Instalación

* Clonar el repositorio.
* Una vez tengas clonado el repositorio ejecuta lo siguiente

```
cd ./repo-folder/
npm install
```

* Copiar el archivo `.env.dist` y renombrar la copia como `.env.development`. Escribir en la variable `REACT_APP_GRAPHQL_SERVER` el servidor GraphQL, que por defecto será [http://localhost:4000](http://localhost:4000)

Una vez instaladas todas las dependencias ejecuta

```
npm start
```
Esto abrirá el proyecto en [http://localhost:3000](http://localhost:3000)

Para los tests hay que ejecutar

```
npm test
```

Si fuera necesario crear el build del proyecto ejecutar

```
npm run build
```

Para realizar este proyecto se ha utilizado `create-react-app`
https://github.com/facebook/create-react-app

