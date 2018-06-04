import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Disk } from '../models/disk.model';
import {Person} from '../models/person.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PersonService {

  constructor(private http: HttpClient) {}

  private url = '/person';

  public getPersons() {
    return this.http.get<Person[]>(this.url);
  }

  public deletePerson(id) {
    return this.http.delete(this.url + '/' + id);
  }

  public createPerson(person) {
    return this.http.post<Person>(this.url, person);
  }

  public getPerson(id) {
    return this.http.get<Person>(this.url + '/' + id);
  }

  public updatePerson(person) {
    return this.http.post<Person>(this.url + '/update', person);
  }
}
