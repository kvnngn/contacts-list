import {Component, OnInit, NgZone} from '@angular/core';
import {ContactsService} from '../../../providers';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {AlertService} from '../../../providers/alert.service';

@Component({
    selector: 'app-patients',
    templateUrl: './contacts-edit.html',
    styleUrls: ['./contacts-edit.component.css']
})
export class ContactsEditComponent implements OnInit {

    contactId: any;
    user;
    contact = {
        id: '',
        firstname: '',
        lastname: '',
        civ: '',
        email: '',
        phone: '',
    };
    firstname = '';
    lastname = '';
    reports : any = [];

    constructor(private contactService: ContactsService,
                private ngZone: NgZone,
                private _Activatedroute: ActivatedRoute,
                private alertService: AlertService,
                private router: Router) {
        this.contactId = this._Activatedroute.snapshot.params.id;
        this.getContactById();
    }

    ngOnInit() {}

    getContactById() {
        this.contactService.getContactById(this.contactId).subscribe(
            contact => {
                this.contact = contact;
                this.firstname = contact.firstname;
                this.lastname = contact.lastname;
            },
            error => {}
        );
    }

    update() {
        this.contactService.update(this.contact).subscribe(
            contact => {
                this.firstname = this.contact.firstname;
                this.lastname = this.contact.lastname;
                this.alertService.alert('success', 'Contact successfully updated');
            },
            error => {this.alertService.alert('warning', 'An error occured during update..');}
        );
    }
}
