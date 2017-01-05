# Sailsjs - Assets - Views - Controllers -  Pipeline

### Materia: `Tecnologías Web con JavaScript`
### Tema: `Sailsjs - Assets - Views - Controllers -  Pipeline`
### Fecha: `2017-01-05`
### Estudiante: Belén Aracely Quispi Sotamba
### Profesor: Tania Calle - Adrian Eguez
### Número de informe: 5

<a name="Cabecera"></a>
## Índice de contenidos

* <a href="#tema">Tema</a>
* <a href="#objetivos">Objetivos</a>
* <a href="#marcoTeorico">Marco Teórico</a>
    - <a href="#sails">Sails.js</a>
    - <a href="#assets">Assets</a>
    - <a href="#views">Views</a>
    - <a href="#routes">Routes</a>
    - <a href="#controllers">Controllers</a>
    - <a href="#pipeline">Pipeline</a>
    
* <a href="#desarrollo">Desarrollo de la Práctica</a>
* <a href="#conrec">Conclusiones y Recomendaciones</a>

<a name="tema"></a>
## Tema
`Sailsjs - Assets - Views - Controllers -  Pipeline`
<br>
<a href="#Cabecera">Ir a la cabecera</a>
<br>

<a name="objetivos"></a>
## Objetivos
*   Entender el uso de sails para el desarrollo web.
*   Aprender a usar los assets de sails para la ímplementación de una páquina web.
*   Crear mediante el uso de views.
*   Aprender a crear routes y controllers en el desarrollo web.
*   Entender el funcionamiento de las rutas y los controladores en el desarrollo web.

<br>
<a href="#Cabecera">Ir a la cabecera</a>
<br>

<a name="marcoTeorico"></a>
## Marco Teórico
<a name="sails"></a>
### Sails.js
<p align="center"><img src="Imagenes/sails.png"> </p>
*   **Sails.js** es un framework o un Marco de Trabajo hecho en JavaScript en Nodejs. 
*   Sails facilita la creación de aplicaciones personalizadas Node.js de calidad empresarial. 
*   Está diseñado para emular el patrón MVC familiar de marcos como Ruby on Rails, pero con soporte para los requisitos de las aplicaciones modernas: API orientadas a datos con una arquitectura escalable y orientada al servicio. 
*   Es especialmente bueno para la construcción de chat, paneles de control en tiempo real, o juegos multijugador; Pero se puede utilizar para cualquier proyecto de aplicación web - de arriba a abajo.

<br>
(Fuente: [Sails.js](http://sailsjs.com/))
<br>
<a href="#Cabecera">Ir a la cabecera</a>
<br>

<a name="assets"></a>
### Assets
<p align="center"><img src="Imagenes/assets.png"> </p>
*   Los assets son una carpeta dentro del Framework la cual funciona como un servidor web de archivos estáticos, en donde cualquier tipo de archivos que se coloque en esta carpeta será mostrada al público.
*   Los assets se refieren a archivos estáticos (js, css, imágenes, etc) en su servidor desea hacer accesible al mundo exterior. 
*   En Sails, estos archivos se colocan en la carpeta **assets/**. 
*   Cuando levante su aplicación, agregue archivos a sus activos o carpeta, o cambie los activos existentes, los procesos de canalización de activos integrados de Sails y sincroniza esos archivos en una carpeta oculta **(.tmp / public /)**.

<br>
(Fuente: [Assets](http://sailsjs.com/documentation/concepts/assets))
<br>
<a href="#Cabecera">Ir a la cabecera</a>
<br>

<a name="views"></a>
### Views
<p align="center"><img src="Imagenes/view.jpg"> </p>
*   Las vistas son las páginas que se va a mostrar al usuario dependiendo de la lógica que tenga nuestra aplicación de sailsjs. 
*   En sails, las vistas son plantillas de marcado que se compilan en el servidor en páginas HTML. 
*   En la mayoría de los casos, las vistas se utilizan como respuesta a una solicitud HTTP entrante para servir su página de inicio.
*   Una vista puede ser compilada directamente en una cadena HTML para su uso en el código del backend. Por ejemplo, puede usar este enfoque para enviar correos electrónicos HTML o para construir grandes cadenas XML para usar con un API heredada.

<br>
(Fuente: [Views](http://sailsjs.com/documentation/concepts/views))
<br>
<a href="#Cabecera">Ir a la cabecera</a>
<br>
    
<a name="routes"></a>
### Routes
<p align="center"><img src="Imagenes/routes.png"> </p>
*   Las rutas son a donde vamos a direccionar nuestro trafico dependiendo los métodos HTTP y el URL de nuestros recursos.
*   La característica más básica de cualquier aplicación web es la capacidad de interpretar una solicitud enviada a una URL y, a continuación, enviar una respuesta. Para ello, su aplicación debe ser capaz de distinguir una URL de otra.
*   La mayoría de los frameworks web, Sails proporciona un enrutador: un mecanismo para asignar URL a controladores y vistas. 
*   Las rutas son reglas que le dicen a Sails qué hacer cuando se enfrentan a una petición entrante. Existen dos tipos principales de rutas en Sails: **personalizadas** (o "explícitas") y **automáticas** (o "implícitas").

<br>
(Fuente: [Routes](http://sailsjs.com/documentation/concepts/routes))
<br>
<a href="#Cabecera">Ir a la cabecera</a>
<br>

<a name="controllers"></a>
### Controllers
<p align="center"><img src="Imagenes/controller.jpg"> </p>
*   Los controladores dentro de Sailsjs tienen como finalidad brindar los métodos CRUD de nuestros modelos, así también como exponer la lógica de negocio que se defina en la aplicación, como por ejemplo la autenticación.
*   Los controladores (la C en MVC) son los principales objetos de su aplicación Sails que son responsables de responder a las solicitudes de un navegador web, una aplicación móvil o cualquier otro sistema capaz de comunicarse con un servidor. 
*   Actúan como intermediarios entre los modelos y puntos de vista. 
*   Los controladores contendrán la mayor parte de la lógica de negocio de su proyecto.
<br>
(Fuente: [Controllers](http://sailsjs.com/documentation/concepts/controllers))
<br>
<a href="#Cabecera">Ir a la cabecera</a>
<br>

<a name="pipeline"></a>
### Pipeline
<p align="center"><img src="Imagenes/grunt.jpg"> </p>
*   En el archivo pipeline.js dentro de la carpeta task se encuentran las diferentes configuraciones de GRUNT que es un automatizador de actividades con JavaScript. 
*   Dentro de este archivo se puede configurar los assets que van a ser inyectados en todas las vistas de nuestra aplicación en Sailsjs. 
*   El directorio tasks / contiene un conjunto de tareas Grunt y sus configuraciones.
*   Las tareas son útiles principalmente para agrupar activos de front-end (como hojas de estilo, scripts y plantillas de marcado del lado del cliente), pero también pueden usarse para automatizar todo tipo de tareas de desarrollo repetitivo, desde compilación de explorador hasta migraciones de bases de datos.
*   Sails agrupa algunas tareas predeterminadas por conveniencia, pero con literalmente cientos de complementos para elegir, puede utilizar tareas para automatizar casi cualquier cosa con un mínimo esfuerzo. Si alguien no ha construido lo que necesita, siempre puede crear y publicar su propio plugin Grunt a npm!
<br>
(Fuente: [Task Automation](http://sailsjs.com/documentation/concepts/assets/task-automation)
<br>
<a href="#Cabecera">Ir a la cabecera</a>
<br>

<a name="desarrollo"></a>
## Desarrollo de la Práctica

1)  Instalar *Sails.js*. Para lo cual se abre una consola de comandos, luego se ejecuta el siguiente comando:
> npm install -g sails 

<p align="center"><img src="Imagenes/instalarSails.jpg"> </p>

2)  Ahora se procede a crear un proyecto con Sails, para lo cual hay que movilizarse al directorio en el cual se va  a crear el proyecto. En este caso se va ha crear en el directorio ServidorHTTP2. 

3)  Para la crear el proyecto se lo hace mediante el siguiente comando:
> sails new nombreProyecto

En este caso el proyecto se va a llamar Proyecto1.
<p align="center"><img src="Imagenes/instalarSails.jpg"> </p>

4)  A continuación, se puede observar que se ha creado una carpeta denominada Proyecto1, la cual se creó en el directorio seleccionado. 

<p align="center"><img src="Imagenes/instalarSails.jpg"> </p>

5)  Ahora se levanta el servidor, para lo cual se cambia a la carpeta *Proyecto1*, y se ejecuta el siguiente comando para levantar el servidor:
> sails lift

<p align="center"><img src="Imagenes/instalarSails.jpg"> </p>

6)  Para verificar que el servidor se ha levantado se accede a la siguiente URL ```
7)





<br>
<a href="#Cabecera">Ir a la cabecera</a>
<br>

<a name="conrec"></a>
## Conclusiones y Recomendaciones
*

<br>
<a href="#Cabecera">Ir a la cabecera</a>
<br>
___ 

Autor: <a href="https://github.com/belenquispi">Belén Quispi</a>
<br>
<a href="#Cabecera">Ir a la cabecera</a>
<br>