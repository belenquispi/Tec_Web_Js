import {Component, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {MasterURLService} from "./services/master-url.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Hola Amigos';
  nombre: string = "";
  apellido: string = "";
  colorH3 = "red";
  nuevaTienda: any = {};

  //Datos publicos no es necesario definirlo con la palabra public
// Datos privados es necesarios definirlos con la palabra privatepri
  //Ya no es necesario declarar, puesto que en la funcion se realizan las declaraciones
  // private nombre1: string;
  // apellido1: string;
  // Constructor
//   constructor() {
//     this.apellido = "Quispi";
//     this.nombre = "Belen";
// // ya no es necesario
//     // this.nombre1=this.nombreConstructor;
//     // this.apellido1=this.apellidoConstructor;
//     console.log("Inicio el constructor");
//   }
  constructor(private _http:Http,
              private _masterURL:MasterURLService)
{


)
}


  ngOnInit() {
    console.log("OnInit");
    this.apellido = "Sotamba";
    this.nombre = "Aracely";
  }

  nombrecompleto(): string {
    return `${this.nombre} ${this.apellido}`;
  }

  hizoclick() {
    console.log("Hizo click")
  }

  hizofocus() {
    console.log("Hizo focus")
  }

  crearTienda(formulario) {
    console.log(formulario);

  this._http.post(this._masterURL.url, {} )
    .subscribe(respuesta=>console.log("respuesta", respuesta));

  }

  //Funciones se definen
  // title = 'app works!';


}
