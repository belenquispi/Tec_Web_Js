## Comandos Importantes

### Instalar sailsjs

Sailsjs es un servidor web que se conecta a bases de datos y puede funcionar con aplicaciones en tiempo real, ayudandonos a crear REST APIs.

```
> npm install -g sails
``` 

El -g nos deja utilizarlo globalmente.

### Crear un proyecto en Sailsjs

```
> sails new NombreProyecto
```

### Levantar el servidor

``` 
> sails lift
``` 

```
> node app.js
```

El sails les pide opciones si no estan definidas, las opciones son:
- 1: SAFE MODE no se va a alterar la base de datos.
- 2: ALTER MODE se va a alterar la base de datos si nosotros hicimos cambios en los modelos por ejemplo.
- 3: DELETE MODE borra todos los datos de la base y vuelve a crear los modelos.

## Servidor Web de Sailsjs

El servidor web de sails se encuentra localizado en la carpeta **assets**


En esta carpeta se creo tres archivos (html, css, js).

## Pestaña views

### homepage 
mantiene todo que va a tener el body de la pagina web.

## Crear vistas

para ello hay que crearlas las rutas en el archivo config/routes.js

luego se crean los archivos de las nuevas vistas en el directorio views
cada archivodebe tener el mismo nombre que se puso en la creación de las vistas. Cada archivo tiene como extensión .ejs


    