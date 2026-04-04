// ANGULAR @NgModule - Importar componentes

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponent } from './teste/teste';

@NgModule ({
    declarations: [
        TesteComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TesteComponent
    ]
})

export class MeuModulo { }
