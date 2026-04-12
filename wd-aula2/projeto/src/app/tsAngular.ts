// ANGULAR @NgModule - Importar componentes

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponent } from './teste/teste';
import { Usuario } from './usuario/usuario';

@NgModule ({
    declarations: [
        TesteComponent,
        Usuario
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TesteComponent
    ]
})

export class MeuModulo { }
