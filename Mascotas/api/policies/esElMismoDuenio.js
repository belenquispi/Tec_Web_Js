/**
 * Created by Belen on 04/03/2017.
 */
module.exports = function (req, res, next) {
  var parametros = req.allParams();
  if (parametros.idUsuarios == req.session.credencialSegura.id) {
    return next();
  }
  //return res.forbidden('USTED NO PUEDE EDITAR LA INFORMACIÓN DE OTROS USUARIOS');
  return res.view('vistas/Error', {
    error: {
      descripcion: "Acceso no autorizado",
      rawError: "Usted no puede editar la información de las mascotas de otros usuarios.",
      url: "/"
    }
  })
};
