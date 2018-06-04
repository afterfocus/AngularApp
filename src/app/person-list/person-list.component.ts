import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Person } from '../models/person.model';
import {PersonService} from '../services/person.service';
import {Disk} from '../models/disk.model';

@Component({
  templateUrl: './person-list.component.html',
})
export class PersonListComponent implements OnInit {

  persons: Person[];

  constructor(private router: Router, private personService: PersonService) {

  }

  ngOnInit() {
    this.personService.getPersons()
      .subscribe( data => {
        this.persons = data;
      });
  }

  deletePerson(person: Person): void {
    if (confirm('Удалить держателя?')) {
      this.personService.deletePerson(person.personID)
        .subscribe(data => {
          this.persons = this.persons.filter(u => u !== person);
        });
    }
  }

  editPerson(person: Person): void {
    this.router.navigate(['/editPerson'], {queryParams: {code: person.personID}});
  }

  showDisks(person: Person): void {
    this.router.navigate(['/diskList'], {queryParams: {code: person.personID}});
  }
}
