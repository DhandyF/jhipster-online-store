import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoreSharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';

import { ButtonsModule, WavesModule, CardsFreeModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductService } from 'app/entities/product';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        StoreSharedModule,
        RouterModule.forChild([HOME_ROUTE]),
        ButtonsModule,
        WavesModule,
        CardsFreeModule,
        MDBBootstrapModule,
        BrowserAnimationsModule,
        CommonModule
    ],
    declarations: [HomeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [ProductService]
})
export class StoreHomeModule {}
