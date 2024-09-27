import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.page.html',
  styleUrls: ['./seguridad.page.scss'],
})
export class SeguridadPage implements OnInit {

  nombre: string = "";

  constructor(private alertController: AlertController, private storage: NativeStorage) { }

  ngOnInit() {
  }
  buscar(){
    this.storage.getItem(this.nombre).then(data=>{
      this.presentAlert("Valor; "+ data); //para mostrarlo
    })
  }
  async presentAlert(msj:string) {
    const alert = await this.alertController.create({
      header: 'info',
      message: msj,
      buttons: ['Ok'],
    });

    await alert.present();
    }
}
