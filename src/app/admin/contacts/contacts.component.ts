import {Component, OnInit, NgZone} from '@angular/core';
import {Router} from '@angular/router';
import {ContactsService} from '../../providers';
import {AlertService} from "../../providers/alert.service";

@Component({
    selector: 'app-patients',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

    contacts: any = [];
    user;
    columnDefs = [
        {headerName: 'Civility', field: 'civ' },
        {headerName: 'First name', field: 'firstname' },
        {headerName: 'Last name', field: 'lastname' },
        {headerName: 'Email', field: 'email'},
        {headerName: 'Phone', field: 'phone'}
    ];
    constructor(private contactService: ContactsService,
                private alertService: AlertService,
                private router: Router,
                private ngZone: NgZone) {
    }

    ngOnInit() {
        this.getContacts();
    }

    getContacts() {
        this.contactService.getContacts().subscribe(
            contacts => {
                this.ngZone.run(() => {this.contacts = contacts;});
                console.log(contacts);
                console.log(this.contacts)
            },
            error => {
                console.log(error);
            }
        );
    }

    goToContactEdit(patient){
        this.router.navigate(['/admin/contacts/edit/' + patient.id], patient);
    }

    delete(contact) {
        this.contactService.delete(contact).subscribe(
            contact => {
                this.alertService.alert('success', 'Contact successfully deleted');
                this.router.navigate(['/admin/contacts']);
            },
            error => {this.alertService.alert('warning', 'An error occured during update..');}
        );
    }
}
