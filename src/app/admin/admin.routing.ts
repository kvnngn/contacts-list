import {Routes} from '@angular/router';
import {ContactsEditComponent} from './contacts/contacts-edit/contacts-edit.component';
import {ContactsNewComponent} from './contacts/contacts-new/contacts-new.component';
import {ContactsComponent} from './contacts/contacts.component';

export const AdminRoutes: Routes = [

        {
            path: 'contacts',
            component: ContactsComponent
        },
        {
            path: 'contacts/new',
            component: ContactsNewComponent
        },
        {
            path: 'contacts/edit/:id',
            component: ContactsEditComponent
        }
    ]
;
