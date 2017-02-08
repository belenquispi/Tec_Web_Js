/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    home: function (req, res) {

    // res.view(String: Nombre vista, Datos JSON)
    return res.view('vistas/home', {
      titulo: 'Inicio',
      title: 'Inicio',
      numero: 1,
      mauricio: {
        nombre: 'Mauricio',
        cedula: 1718137159
      },
      usuarios: []
    }) 
    },
    
  crearUsuario: function (req, res) {
    return res.view('vistas/Usuario/crearUsuario', {
      title: 'Crear Usuarios'
    })
  },
    
    
 listarUsuarios:function(req,res)
    {
        Usuario.find()
            .exe(function(error,usuariosEncontrados){
            if(error) {
                 res.view ('vistas/Error', {
                error:{
                descripcion:"Hubo en problema cargando los usuarios",
                rawError: error,
                url:"/ListarUsuarios"
            }
            } );
                 }
        res.view ('vistas/Usuario/listarUsuarios', {
            usuarios:usuariosEncontrados;  
        });
        })
    },    
    
    
    
    error:function(req,res)
    {
        return res.view ('vistas/Error', {
            error:{
                descripcion:"Usted esta por error en esra Ruta dirifase a Inicio",
                rawError: "Ruta equivocada",
                url:"/Inicio"
            }
        })
    }

};
    
    
    
    
    
    