var express=require('express');
var app=express();

var puerto=5050;


app.get('/',function(req,res){
        res.send('Hello World!')
        })

app.get('/TecnologiasWeb',function(req,res){
        res.send('con javascript !')
        })
app.listen(puerto,function(){
    console.log('Example app listening on port '+puerto)
})

// con post 
app.post('/TecnologiasWeb',function(req,res){
var usuario={
    nombre: 'Belen',
    ci:'1724533417'
}

//usuario = {
//    nombre:usuario.nombre,
//    ci:usuario.ci,
//    apellido:
//}
    
    usuario.apellido='';
    usuario.mascotas=[];
    usuario.casado=false;
   
   
    res.append('token','1234');
    res.append('usuario','belen');
    
    console.log('lo que tengo en el request es:')
    console.log(req);
    console.log('lo que tengo en el respond es:')
    console.log(res);
    console.log('Cabeceras request')
    console.log(req.headers);
    console.log('Cabeceras respond')
    console.log(res.headers);
    

    res.json(usuario);
    
    res.send('con javascript con post!');
    });



