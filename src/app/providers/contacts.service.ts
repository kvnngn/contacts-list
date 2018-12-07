import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs/Rx';
import {User} from "../../_models";

@Injectable()
export class ContactsService {
    constructor(private api: ApiService) {
    }

    getContacts(): Observable<any> {
        return this.api.get('/contacts');
    }

    getContactById(id): Observable<any> {
        return this.api.get('/contact/id/' + id);
    }

    createContact(patient) {
        return this.api.post('/contact/create', patient);
    }

    update(params): Observable<any> {
        console.log(params);
        return this.api.put('/contact/update/id/' + params.id, params);
    }

    delete(params): Observable<any> {
        return this.api.delete('/contact/delete/id/' + params.id);
    }
}
