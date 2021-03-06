import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {

  @ViewChild('slider', { read: ElementRef })slider: ElementRef;
  img: any;
  selectedarray:any[]=[];
 
  sliderOpts = {
    zoom: {
      maxRatio: 2
    }
  };
 
  constructor(private navParams: NavParams, private modalController: ModalController) { }
 
  ngOnInit() {
    
  
    this.img = this.navParams.get('img');
    this.selectedarray=this.navParams.get('array');
  }
  
 
  
 
  close() {
    this.modalController.dismiss();
  }

}
