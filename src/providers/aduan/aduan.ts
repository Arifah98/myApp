import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolveDefinition } from '../../../node_modules/@angular/core/src/view/util';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the AduanProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class AduanProvider {
 baseURL: string ='http://localhost/helpdesk/api/';
  constructor(public http: HttpClient, public alertCtrl : AlertController) {
    console.log('Hello AduanProvider Provider');
  }

  getAllAduan(){
    let url : string = this.baseURL + 'getAduanAll';

    return new Promise((resolve,reject) => {
    this.http.get(url)
    .subscribe(data => {
      resolve(data);
    },error =>{
      reject(error);
    })

    });

  }

  doLogin(user){
    let url : string = this.baseURL + 'login';
    //convert to string format
    let body = JSON.stringify(user);

    return new Promise((resolve,reject) => {
    this.http.post(url,body)
    .subscribe(data => {
      resolve(data);
    },error =>{
      reject(error);
    })

    });
  }

  createAduan(aduan){
    let userData = JSON.parse(localStorage.getItem('USER'));
    let aduanData = {
      user_id: userData.user_id,
      token: userData.token,
      title: aduan.title,
      kategori: aduan.kategori,
      masalah: aduan.masalah
    };
    
    let url: string = this.baseURL + 'createAduan';
    let body = JSON.stringify(aduanData);

    //call http post request
    return new Promise((resolve, reject) => {
      this.http.post(url, body)
      .subscribe(data => {
        resolve(data);
      },error =>{
        reject(error);
      })
    });
    
  } 

  showAlert(title, message){
   let alert = this.alertCtrl.create({
     title: title,
     subTitle: message,
     buttons: ['OK']

   })
   alert.present();
  }
}
