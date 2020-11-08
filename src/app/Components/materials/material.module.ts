import { NgModule } from '@angular/core'


import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTreeModule} from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import {CdkTreeModule} from '@angular/cdk/tree';

@NgModule({
    exports:[
        MatTreeModule,
        MatExpansionModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatButtonModule
    ]


})

export class MaterialsModule{}