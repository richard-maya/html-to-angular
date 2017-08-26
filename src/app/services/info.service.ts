import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class InfoService {

  info:any = {};
  equipo:any[] = [];

  constructor( public http:Http ) {
    this.carga_info();
    this.carga_about();
  }

  public carga_info(){
    this.http.get("assets/data/info.pagina.json")
              .subscribe ( data =>{
                  // console.log(data.json());
                  this.info = data.json();
              })
  }

  public carga_about(){
    this.http.get("https://paginamamalona.firebaseio.com/team.json")
              .subscribe ( data =>{
                  // console.log(data.json());
                  this.equipo = data.json();
              })
  }

}
