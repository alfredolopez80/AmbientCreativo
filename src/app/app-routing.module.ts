
// Modulos
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { HomeComponent } from './component/home/home.component';
import { InfanJuvenComponent } from './component/infan-juven/infan-juven.component';
import { DecorativosComponent } from './component/decorativos/decorativos.component';
import { DesignComponent } from './component/design/design.component';
import { PersianasComponent } from './component/persianas/persianas.component';
import { Laminas3dComponent } from './component/laminas-3d/laminas-3d.component';
import { PisosLaminadosComponent } from './component/pisos-laminados/pisos-laminados.component';
import { PisosVinilDrybackComponent } from './component/pisos-vinil-dryback/pisos-vinil-dryback.component';
import { PisosVinilClickComponent } from './component/pisos-vinil-click/pisos-vinil-click.component';
import { PisosDeckComponent } from './component/pisos-deck/pisos-deck.component';
import { TelasCasamanceComponent } from './component/telas-casamance/telas-casamance.component';
import { TelasCamengoComponent } from './component/telas-camengo/telas-camengo.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'infanjuven', component: InfanJuvenComponent},
    { path: 'decorativos', component: DecorativosComponent},
    { path: 'design', component: DesignComponent},
    { path: 'pisos-laminados', component: PisosLaminadosComponent},
    { path: 'pisos-vinil-dryback', component: PisosVinilDrybackComponent},
    { path: 'pisos-vinil-click', component: PisosVinilClickComponent},
    { path: 'pisos-deck', component: PisosDeckComponent},
    { path: 'persianas', component: PersianasComponent},
    { path: 'laminas-3d', component: Laminas3dComponent},
    { path: 'telas-casamance', component: TelasCasamanceComponent},
    { path: 'telas-camengo', component: TelasCamengoComponent},
    { path: 'contacto', component: ContactoComponent},
    { path: 'aboutus', component: AboutusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
