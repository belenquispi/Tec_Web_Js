var express=require('express');
var app=express();

var puerto=5050;

app.get('/',function(req,res){
        res.send('Hello World!')
        })

`app.get('/TecnologiasWeb',function(req,res){`
        
        request => req
        responde => res
* funcion que permite enviar a mostrar en el brower
`res.send('con javascript !')        })`
`app.listen(puerto,function(){
console.log('Example app listening on port '+puerto)
})`

`app.post('/TecnologiasWeb',function(req,res){
res.send('con javascript con post!')
}) `

