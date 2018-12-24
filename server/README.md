# Instrucciones de instalación

## Requisitos

* [Prisma](https://www.prisma.io/docs/1.23/get-started/01-setting-up-prisma-new-database-JAVASCRIPT-a002/)
* [Docker](https://docs.docker.com/compose/install/)

## Instalación

Instala el cli de `prisma` de forma global

```
npm install -g prisma
```

Teniendo docker ya instalado, y teniendo en cuenta que ya tienes clonado todo el repositorio, entra en la carpeta `./server` (Que es en la que se debería estar si se está leyendo esto)

* Instala las dependencias

```
npm install
```

Una vez instaladas todas las dependencias ejecuta

```
npm run database-up
```

Este comando levantará una instancia de MongoDB.

Después ejecuta

```
npm run generate
npm run deploy
```

Con esto la base de datos ya está lista, y el servidor se puede iniciar, para eso ejecuta

```
npm start
```
Esto levantará el servidor en [http://localhost:4000](http://localhost:4000)

Ahora ve al `README.md` de la raíz para configurar el front.


