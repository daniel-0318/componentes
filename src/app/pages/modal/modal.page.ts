import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: { 
        nombre: "Daniel",
        pais: "Colombia"
      }
      });
    
      await modal.present();

      const resp = await modal.onDidDismiss(); // -> Este hace llegar la info despues de que termine de cerrarse el modal
      // const resp = await modal.onWillDismiss(); -> Este hace llegar la info antes de que termine de cerrarse el modal
      
      console.log(resp);

  }

}
