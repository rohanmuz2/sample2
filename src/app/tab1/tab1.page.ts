import { ImageModalPage } from './../image-modal/image-modal.page';
import { Component } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
dockerarray:any[]=['dockimage1','dockimage2','dockimage3'];
kuberarray:any[]=['kuberimage1','kuberimage2','kuberimage3'];
microarray:any[]=['microimage1','microimage2','microimage3','microimage4','microimage5'];
Description:string = 'Welcome to the presentation';
SelectedArray:any[]=[];

  constructor(private modalController: ModalController,public spinnerLoader:LoadingController)
  {
    this.presentLoading('Home').then();
  }
goToDemo(){
  
}
slideOpts = {
    effect: 'flip',
    loop: 'true',
  };

  slidesDidLoad(slides:IonSlides) {
    slides.startAutoplay();
    }

  docker(){
    this.presentLoading('Docker').then();
    this.SelectedArray=this.dockerarray;
    this.Description="Docker";

  }

  kuber(){
    this.presentLoading('Kubernetes').then();
    this.SelectedArray=this.kuberarray;
    this.Description="Kubernetes";

  }

  micro(){
    this.presentLoading('Micro Services').then();
    this.SelectedArray=this.microarray;
    this.Description="Micro Services";
  }
  openPreview(img){
    img='./../../assets/'+img;
    console.log(img);
    this.modalController.create({
      component: ImageModalPage,
      componentProps: {
        img: img,
        array:this.SelectedArray
      }
    }).then(modal => {
      modal.present();
    });
  }
  

  async presentLoading(messages) {
    const loading = await this.spinnerLoader.create({
      message: messages,
      duration: 750
    });
    return await loading.present();
  }


  
}
