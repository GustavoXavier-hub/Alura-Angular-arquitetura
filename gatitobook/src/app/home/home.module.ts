import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';



@NgModule({
  declarations:[HomeComponent, LoginComponent, NovoUsuarioComponent],
  imports:[CommonModule,HomeRoutingModule,FormsModule,MensagemModule],
  exports:[HomeComponent], 
})
export class HomeModule { }
