var express = require('express');
var app = express();
var puerto = 5050;
var usuarios = [{
        id: 1,
        nombre: 'Belen',
        cedula: '1724533417'
    },
    {

        id: 2,
        nombre: 'Jose',
        cedula: '1712715489'
    },
    {
        id: 2,
        nombre: 'Jose',
        cedula: '1712715489'
    }];



app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/TecnologiasWeb', function (req, res) {
    res.send('con javascript !')
})

app.get('/Usuarios', function (req, res) {
    res.json(usuarios);
})

app.listen(puerto, function () {
    console.log('Example app listening on port ' + puerto)
})

app.get('/Usuario/:idUsuario', function (req, res) {
    var idActual = req.params.idUsuario;
    for (var i =0; i < usuarios.length; i++) {
        if (idActual == usuarios[i].id) {
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
    }
    console.log(req.params.nombre);
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
})