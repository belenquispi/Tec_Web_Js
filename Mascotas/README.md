# Mascotas

a [Sails](http://sailsjs.org) application

## Levantar en otro puerto
Para ello usamos el siguiente comando
>node app.js --port 1338

## Inicio
Para que al momento de iniciar el servidor no pida autorizacion, hay que configurar el archivo ** nodels.js** que se encuentra en la carpeta **config**

```migrate: 'alter'```

* LAYOUT es el contenedor de toda la aplicacion


*   Copiar un nav de bootstrap

*   Borrar lo innecesario

* ```<a class="navbar-brand" href="#">Brand</a> ```Cambiar el href y el Brand



*   Referenciar a los archivos
 ```<link rel="stylesheet" href="/Bootstrap/bootstrap/css/bootstrap.css">
    <script src="jQuery/jquery-3.1.1.min.js"></script>
    <script src="/Bootstrap/bootstrap/js/bootstrap.js"></script> ```
    
* Crear 
```
 <div class="navbar navbar-fixed-bottom">
      Desarrolado por Escuela Politecnica Nacional
    </div>

```

* Modificar el Routes

``` 'get /': 'RutasController.home',
    'get /Inicio':  'RutasController.home',
    'get /CrearUsuario':  'RutasController.crearUsuario'
    ```