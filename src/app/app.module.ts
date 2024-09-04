import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmpresaComponent } from './Pages/empresa/empresa.component';
import { HeaderComponent } from './Components/header/header.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { DescriptionComponent } from './Components/description/description.component';
import { PrestadorComponent } from './Components/prestador/prestador.component';
import { ClienteComponent } from './Components/cliente/cliente.component';
import { AplicativoComponent } from './Components/aplicativo/aplicativo.component';
import { HommeiComponent } from './hommei/hommei.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    HeaderComponent,
    WelcomeComponent,
    DescriptionComponent,
    PrestadorComponent,
    ClienteComponent,
    AplicativoComponent,
    HommeiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
