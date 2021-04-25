import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';
import { CampaniasComponent } from './campanias/campanias.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { EditarinfoComponent } from './editarinfo/editarinfo.component';

const routes: Routes = [
    {
        path: '', component: PagesComponent, children: [
            { path: 'usuarios', component: UsuariosComponent },
            { path: 'transacciones', component: TransaccionesComponent },
            { path: 'campanias', component: CampaniasComponent },
            { path: 'marketplace', component: MarketplaceComponent },
            { path: 'editarinfo', component: EditarinfoComponent },
            { path: '', redirectTo: 'usuarios', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {
}