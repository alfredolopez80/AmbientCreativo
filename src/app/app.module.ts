// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

// Modulo de Ruteo;
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { PersianasComponent } from './component/persianas/persianas.component';
import { Laminas3dComponent } from './component/laminas-3d/laminas-3d.component';
import { InfanJuvenComponent } from './component/infan-juven/infan-juven.component';
import { DecorativosComponent } from './component/decorativos/decorativos.component';
import { DesignComponent } from './component/design/design.component';
import { PisosLaminadosComponent } from './component/pisos-laminados/pisos-laminados.component';
import { PisosVinilDrybackComponent } from './component/pisos-vinil-dryback/pisos-vinil-dryback.component';
import { PisosVinilClickComponent } from './component/pisos-vinil-click/pisos-vinil-click.component';
import { PisosDeckComponent } from './component/pisos-deck/pisos-deck.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { TelasCasamanceComponent } from './component/telas-casamance/telas-casamance.component';
import { TelasCamengoComponent } from './component/telas-camengo/telas-camengo.component';
import { ContactoComponent } from './component/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PersianasComponent,
    Laminas3dComponent,
    InfanJuvenComponent,
    DecorativosComponent,
    DesignComponent,
    PisosLaminadosComponent,
    PisosVinilDrybackComponent,
    PisosVinilClickComponent,
    PisosDeckComponent,
    AboutusComponent,
    TelasCasamanceComponent,
    TelasCamengoComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot() // <--Add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
