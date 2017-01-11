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


## Generar controladores Sailsja

Para generar constroladores se utiliza el siguiente comando:
```
< sails  generate controller NombreDelControlador
```

Para la editar el controlador que se ha creado nos dirigimos a la carpeta api/controllers 

En esa carpeta se encuentra el nombre del controlador. 

Dentro de ello se edita el objeto para las respuestas.

```javascript
module.exports = {
    hola:function(req,res){
        res.send('Hola');
        
    },
     adios:function(req,res){
        res.send('Adios');
        
    },
 hora:function(req,res){
        res.send('Hora');
        
    }
	
};
```
Para la verificación se dirige al la página web y en el url se escribe lo siguiente:

```
http://localhost:1337/saludo/adios
```


///////////////////////////////////////
## Generar modelos en Sailsjs

```
>sails generate model nombreModelo

```


## Generar APIs en Sailsjs

```
>sails generate api NombreAPI

```

Un Api es la fusión de un **controlador ** y un modelo.



## API REST

### Modelo de usuario
Crear
URL:

```
http://localhost:1337/
```

Metodo HTTP:
´post´
Datos:
```javascript
{
nombre:'Belen',
apellido:'Quispi´,
correo:'mbaqs_24@live.com'
}
```


# BLUEPRINTS


Mediante la URL el sails permite implementar métodos en los modelos creados, usando GET, los cuales se denomina shortcuts. 
Esto funciona siempre que se encuentre habilitado

``` http://localhost:1337/Usuario/create?nombres=Jaime&apellidos=Sotamba
 ``` crea un nuevo usuario.
 
 ```   http://localhost:1337/Usuario/destroy/42
```
elimina un usuario

```    http://localhost:1337/Usuario/update/41?nombres=Rositaa ```
actualiza un usuario.     
     
Si se desea desactivar esta opcion se lo debe hacer en el archivo **blueprints.js** que se encuentra en directorio **config**     

## Crear en modelos

http://sailsjs.com/documentation/reference/waterline-orm/models/create


## Crear relaciones 
Crear un nuevo modelo, para lo cual se usa los comandos
> sails generate api Raza
> sails generate api Mascota

al generar el api, este cre tanto el modelo como el controlador.


```http://sailsjs.com/documentation/concepts/models-and-orm/associations
```
``` //Mascotas es el nombre en plural del modelo a relacionarse.
        mascotas: {
            //Collection es el nombre dl Medelo en Sails
            collection: 'Mascota',
            // Via es el campo por el cual se vaa a relacionar
            via: 'idRaza'
        }
``` 

# Renderización de las vistas

```http://sailsjs.com/documentation/reference/response-res/res-view ```

Crear un nuevo controlador denomindado **Rutas**
Tiene la siguiente información
 ```
module.exports = {
    
    home: function(res,req)
    {
        // res.view (String: Nombre vista, Datos JSON)
        return res.view('vista/home');
    }
	
};
```
Crear una carpeta denominada **vistas** dentro de la carpeta **views** 
Luego crear el archivo **home.js**  que tendría la siguiente información

```<h1>Home<h1>```


Ahora definir las rutas para la vista **home.js**