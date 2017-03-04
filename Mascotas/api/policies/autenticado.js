

module.exports = function(req, res, next) {
  if (req.session.credencialSegura) {
    return next();
  }
  // return res.forbidden('USTED NO PUEDE ENTRAR A ESTA VISTA');
  return res.view('vistas/Error', {
    error :{
      descripcion:"Acceso no autorizado",
      rawError:"Usted no puede entrar a esta vista. Inicie sesión",
      url:"/"
    }
  });

};
