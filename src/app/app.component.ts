import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
play() {

  this.tempo=setInterval(()=>{
    this.siguiente();
  },100);

}
disminuir() {
  this.altura=this.altura-50;
  this.ancho=this.altura-50;
}
aumentar() {
  this.altura=this.altura+50;
  this.ancho=this.altura+50;
}
anterior() {

  if(this.posicion==0){
    this.posicion=this.imagenes.length-1;
  }

    this.posicion--;
      this.imagen=this.imagenes[this.posicion];

      this.ancho=300;
      this.altura=300;

}
siguiente() {

  if(this.posicion==this.imagenes.length-1){
    this.posicion=0;
  }

  if(this.posicion<this.imagenes.length){
  this.posicion++;
    this.imagen=this.imagenes[this.posicion];

    this.ancho=300;
    this.altura=300;
  }
}
  title = 'angular1';

  imagenes = [ 'https://randomuser.me/api/portraits/women/40.jpg', 'https://randomuser.me/api/portraits/women/41.jpg', 'https://randomuser.me/api/portraits/women/42.jpg', 'https://randomuser.me/api/portraits/women/43.jpg', 'https://randomuser.me/api/portraits/women/44.jpg', 'https://randomuser.me/api/portraits/men/40.jpg', 'https://randomuser.me/api/portraits/men/41.jpg', 'https://randomuser.me/api/portraits/men/42.jpg', 'https://randomuser.me/api/portraits/men/43.jpg', 'https://randomuser.me/api/portraits/men/44.jpg', ];
imagen: string="";
ancho: number=200;
altura: number=200;
posicion:number=0;
tempo:NodeJS.Timeout | undefined;

constructor (){

this.imagen=this.imagenes[0];

this.ancho=300;
this.altura=300;
}




}
