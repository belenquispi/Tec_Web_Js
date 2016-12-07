var express = require('express');
var app = express();
var puerto = 5050;
var usuarios = [{
        id: 1,
        nombre: 'Belen',
        cedula: '1724533417'
    },{

        id: 2,
        nombre: 'Jose',
        cedula: '1712715489'
    },{
        id: 2,
        nombre: 'Jose',
        cedula: '1712715489'
    }];
var contador=usuarios.length;

var fs = require('fs');

//fs.readFile('');

app.get('/', function (req, res) {
    console.log('1 antes de leer'); 
    fs.readFile('./paginas/pagina.html',
            'utf8',
           function(error,archivoLeido){
            console.log('3'+ error) ;
            console.log('4'+ archivoLeido);
          //  res.send(archivoLeido);
            }
    );
    fs.readFile('./paginas/usuario.html',
            'utf8',
           function(error,archivoLeido){
            console.log('3'+ error) ;
            console.log('4'+ archivoLeido);
            res.send(archivoLeido);
            }
    );
    console.log('2 parece que termino de leer');
});

app.listen(puerto, function () {
    console.log('Example app listening on port ' + puerto)
})
/**
app.get('/TecnologiasWeb', function (req, res) {
    res.send('con javascript !')
})

app.get('/Usuarios', function (req, res) {
    res.json(usuarios);
})

app.listen(puerto, function () {
    console.log('Example app listening on port ' + puerto)
})

app.get('/Usuarios/:idUsuario', function (req, res) {
    var idActual = req.params.idUsuario;
    console.log(idActual);
    for (var i =0; i < usuarios.length; i++) {
        console.log(i);
        if (idActual == usuarios[i].id) {
            console.log(idActual);
            //responde con el usuario con el idActual
            res.json(usuarios[i]);
        }

    }
    // si no lo encuentra en el arreglo
    res.send('Error'); 
})

// con post 
app.post('/TecnologiasWeb', function (req, res) {
    var usuario = {
        nombre: 'Belen',
        ci: '1724533417'
    };
   // console.log(req.params.nombre);
//usuario = {
    //    nombre:usuario.nombre,
    //    ci:usuario.ci,
    //    apellido:
    //}

    usuario.apellido = '';
    usuario.mascotas = [];
    usuario.casado = false;

    res.append('token', '1234');
    res.append('usuario', 'belen');

    //    console.log('lo que tengo en el request es:')
    //    console.log(req);
    //    console.log('lo que tengo en el respond es:')
    //    console.log(res);
    //    console.log('Cabeceras request')
    //    console.log(req.headers);
    //    console.log('Cabeceras respond')
    //    console.log(res.headers);
    //    

    res.json(usuario);

    res.send('con javascript con post!');
});

app.post('/Usuario', function(req,res)
        {
//    console.log(req.query.nombre);
//    console.los(req.query.cedula);
   if(!req.query.nombre){
        res.send('No envio nombre');
    }
    if(!req.query.cedula)
        {
            res.send('No envio la cedula');
        }
    
    var nuevoUsuarios= {
        id:contador+1,
        nombre:req.query.nombre,
    cedula:req.query.cedula
    }
    usuarios.push(nuevoUsuarios);
    contador++;
    res.json(nuevoUsuarios);
    
})





fs.readFile('');
// absolute path
//paginas/pagina.html
// > C:/paginas/pagina.htlm

//

// primer parámetro es el path, segundo parametro es la codificación, tercer parámetro una funcion 

var quePasa='';
quePasa='esta por leer el archivo';
console.log(quePasa);

fs.readFile('./paginas/pagina.html',
            'utf8',
           function(error,archivoLeido){
            console.log(error)  ;
               console.log(archivoLeido)  
});

quePasa='termino de leer el archivo';
console.log(quePasa);**/