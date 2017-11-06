import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HoverToolbarComponent } from './hover-toolbar.component';
//import { CreateboardcomponentModule } from '../../components';
//import { DropdownComponent } from '../../../layout/bs-component/components';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
        //CreateboardcomponentModule 
    ],
    declarations: [HoverToolbarComponent],
    exports: [HoverToolbarComponent]
})
export class HoverToolbarModule { }
