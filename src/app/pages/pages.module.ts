import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material';

import { PagesRoutingModule } from './pages-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';
import { CampaniasComponent } from './campanias/campanias.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ContraseniaComponent } from './contrasenia/contrasenia.component';
import { EditarinfoComponent } from './editarinfo/editarinfo.component';

@NgModule({
    declarations: [
        UsuariosComponent,
        TransaccionesComponent,
        CampaniasComponent,
        MarketplaceComponent,
        PerfilComponent,
        ContraseniaComponent,
        EditarinfoComponent],
    imports: [
        CommonModule,
        PagesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ]
})
export class PagesModule {
}