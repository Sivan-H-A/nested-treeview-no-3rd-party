import { NgModule } from '@angular/core'


import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    exports:[
        MatExpansionModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatButtonModule,
    ]
})

export class MaterialsModule{}