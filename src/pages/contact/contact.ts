import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js'; 
import { AduanProvider } from '../../providers/aduan/aduan';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  @ViewChild('pieCanvas') pieCanvas ;
  pieChart: any ;
  constructor(public navCtrl: NavController, public aduanP : AduanProvider) {
  }
  ionViewDidLoad(){
    this.aduanP.getAllAduan().then(res =>{
      let data : any = res;
      console.log(data.feedData);
      let countCategory = {
        Kerosakkan : 0,
        Pencemaran : 0,
        Bencana : 0
      }
      //javaScript
      for(let item of data.feedData){
        if(item.kategori == 'Kerosakkan'){
          countCategory.Kerosakkan +=1 ;
        }else if(item.kategori == 'Pencemaran'){
          countCategory.Pencemaran +=1 ;
        }else if(item.kategori == 'Bencana' ){
          countCategory.Bencana +=1 ;
        }
      }

    this.pieChart = new Chart(this.pieCanvas.nativeElement, {
      type:'pie',
      data :{
        labels: ['Kerosakkan','Pencemaran','Bencana'],
        datasets : [{
          backgroundColor :['blue','red','yellow'],
          data : [
            countCategory.Kerosakkan,
            countCategory.Pencemaran,
            countCategory.Bencana
          ],
          hoverBackgroundColor :['blue','red','yellow'] 
        }]
      }
    });
    },err =>{
    })
  }
}
