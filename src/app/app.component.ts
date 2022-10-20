import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    valor1:string = "Valor da variável 1";
    valor2 = 50;

    mostrarMensagem():void{ 
        alert("Mensagem exibida!");
    }


}
