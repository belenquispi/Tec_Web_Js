# NODE
* Es un compilador JS

Para ejecutar un paquete .js en consola se usa l comando node mas el nombre del archivo.  `node app.js` 

### Gestionador de paquetes
NOde tiene el gestionador de paquetes `nmp`, el cual permite  installar paquetes a ser usados en Node

Pasos parra iniciar JS
* En la consola se escribe la palabra `node`

### Paquete para leer archivos (nativos)
- Para leer un archivo en Node se utiliza un paquete de Node

### Paquete Mysql
- Para controlar una base de datos se usa `npm install node-mysql
 `
### Paquete para escuchar peticiones HTTP
 npm install express --save

### Paquete para cargar archivos 
npm install http server

### Paquete para enviar emails
npm install nodemailer




## Creacion de un paquete 
se usa el comando `npm init` 
el cual se debe llenar la informacion solicitada para la creacion del paquete

`Press ^C at any time to quit.
name: (Nodejs) tecnologiaswebqbelen
version: (1.0.0)
description: Ejemplo para usar el npm
entry point: (app.js)
test command:
git repository:
keywords: calculadora
author: Belen Quispi
license: (ISC) MIT `

## Publicar un paquete 
Despues de haber creado el paquete , este puede ser publicado en nmp , para lo cual se debe tener una cuenta. En este caso la cuente es : belenquispi

C:\Users\USRGAM\Documents\GitHub\Tec_Web_Js\Nodejs>npm login
Username: belenquispi
Password:
Email: (this IS public) mbaqs_24@live.com
Logged in as belenquispi on https://registry.npmjs.org/.


Luego se escribe el comando `npm publish ` para publicar el paquete.

* También se puede hacer actualizaciones y cambiando las version en el archivo `package.json`

Primero se debe login en la consola para lo cual se escribe el comando  `npm login `, luego pide 

## Para instalar un paquete localmente existente

Se debe copiar las instrucciones que se encuentran en la página de donde se va a descargar el paquete.

en este caso será `npm i tecnologiaswebqbelen` , esto se debe ejecutar en la consola de comandos, en la carpeta en la cual se desea que se descargue el paquete.


## Para desinstalar un paquete localmente

Para ello se usa el comando `npm uninstall nombrePaquete` en este caso el paquete es `tecnologiaswebqbelen` . Esto se debe ejecutar en la consola de comandos donde fue instalado el paquete.


## Para instalar un paquete globalmente 
Para ello se usa el comando `npm install -g nombrePaquete` se usa `-g` para que sea global. Es decir para todo el sistema.  Estos se almacenan en la carpeta en la que se encuentran todos los paquetes del sistema.

Esta es la informacion que se muestra despues de la instalacion.

`tecnologiaswebqbelen@1.0.1 C:\Users\USRGAM\AppData\Roaming\npm\node_modules\tecnologiaswebqbelen `

## Importar un paquete
¨Para importa el modulo que se desea, se usa la como en el siguiente código. 
`var calculadora = require("tecnologiaswebqbelen");
console.log(calculadora.imprimirSuma1y2()) `

