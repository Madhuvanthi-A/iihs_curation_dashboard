import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HoverToolbarModule, } from '../../../shared/modules/hover-toolbar/hover-toolbar.module';
import { ModalModule } from '../../../shared/modules/modal/modal.module'; 
import { MagazineviewComponent } from '../magazineview/magazineview.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HoverToolbarModule,
        ModalModule,
        NgbModule.forRoot(),
        NgxPaginationModule
    ],
    declarations: [MagazineviewComponent],
    exports: [MagazineviewComponent]
})
export class MagazineviewModule { }
