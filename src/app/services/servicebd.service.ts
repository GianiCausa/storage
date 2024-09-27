import { Injectable } from '@angular/core';
import { SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class ServicebdService {
//VARIABLE DE CONEXION A LA BASE DE DATOS, DAR AL SEGUNDO SQLITE
  public database!: SQLiteObject;
//VARIABLES DE CREACION DE TABLAS, EL NOT NULL ES PARA QUE SEA OBLIGATORIO 
  tablaNoticia: string = "CREATE TABLE IF NOT EXITS noticia(idnoticia INTEGER PRIMARY KEY autoincrement, titulo VARCHAR(100) NOT NULL, texto TEXT);";
  constructor() { }
}
