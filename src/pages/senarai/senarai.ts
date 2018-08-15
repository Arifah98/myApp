import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SenaraiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-senarai',
  templateUrl: 'senarai.html',
})
export class SenaraiPage {

  users : Array<any>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.users = [
      {
        name:'Ali bin Abu', 
        company :'Maybank' , 
        icNo:'780111-05-7891', 
        imageURL:'https://images.pexels.com/photos/555790/pexels-photo-555790.png?auto=compress&cs=tinysrgb&h=350'
      },
      {
        name:'Soo Woan Chin', 
        company :'CIMB' , 
        icNo:'780103-05-7090', 
        imageURL : 'http://apkandroidstore.com/wp-content/uploads/2017/12/side-part-natural-comb-over-hairstyle-as-current-hairstyles-for-men-with-medium-length-hair-that-shaped-for-signature-classic-look.jpg'
      },
  
      { 
          name:'Raihan Osman', 
          company :'RHB' , 
          icNo:'780630-05-4090' , 
          imageURL :'https://s-s.huffpost.com/contributors/nicholas-wing/headshot.jpg'
      }
      ];
  

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SenaraiPage');
  }

}
