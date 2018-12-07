import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TextareaAutosizeModule} from 'ngx-textarea-autosize';
import {ContactsEditComponent} from './contacts/contacts-edit/contacts-edit.component';
import {ContactsNewComponent} from './contacts/contacts-new/contacts-new.component';
import {ContactsComponent} from './contacts/contacts.component';
import {AdminRoutes} from './admin.routing';

@NgModule({
    imports: [
        RouterModule.forChild(AdminRoutes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TextareaAutosizeModule
    ],
    declarations: [
        ContactsComponent,
        ContactsNewComponent,
        ContactsEditComponent
    ],
    providers: [],
    exports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AdminModule {
}
