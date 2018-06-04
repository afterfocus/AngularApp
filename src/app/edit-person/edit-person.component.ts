import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Person} from '../models/person.model';
import {PersonService} from '../services/person.service';

@Component({
  templateUrl: './edit-person.component.html'
})
export class EditPersonComponent implements OnInit {

  code: number;
  person: Person;
  sub: any;

  constructor(private router: ActivatedRoute, private personService: PersonService) {

  }

  ngOnInit() {
    this.sub = this.router
      .queryParams
      .subscribe(params => {
        this.code = +params['code'] || 0;
      });
    this.personService.getPerson(this.code)
      .subscribe( data => {
        this.person = data;
      });
  }

  editPerson(): void {
    this.personService.updatePerson(this.person)
      .subscribe(data => {
        alert('Держатель изменен.');
      });
  }
}
