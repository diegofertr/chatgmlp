import { Component } from '@angular/core';
import { Message } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public message : Message;
  public messages : Message[];


  constructor(){
    this.message = new Message('', 'assets/images/user.png');
    this.messages = [
      new Message('Bienvenido, puede consultar sus dudas', 'assets/images/logo.png', new Date())
    ];
  }
}
