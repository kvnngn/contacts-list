import {Component, OnInit, NgZone} from '@angular/core';
import {ContactsService} from '../../../providers';
import {Router} from "@angular/router";
import {AlertService} from '../../../providers/alert.service';

@Component({
    selector: 'app-patients',
    templateUrl: './contacts-new.component.html',
    styleUrls: ['../contacts.component.css']
})
export class ContactsNewComponent implements OnInit {

    contact: any = {
        firstname: '',
        lastname: '',
        birthdate: '',
        civility: 'M'
    };
    user;

    constructor(private contactsService: ContactsService,
                private alertService: AlertService,
                private ngZone: NgZone,
                private router: Router) {
    }

    ngOnInit() {
    }

    createContact() {
        this.contactsService.createContact(this.contact).subscribe(
            contact => {
                this.alertService.alert('success', 'Contact successfully created');
                this.router.navigate(['/admin/contacts']);
            },
            error => {
                this.alertService.alert('warning', 'An error occured during creation..');
                console.log(error)
            }
        );
    }
}
