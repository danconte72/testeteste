import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  titulo: string = "";
  lista: Array<string> = [];
  teste: {
    
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  adicionar() {
    this.lista.push(this.titulo);
    this.titulo = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

}
