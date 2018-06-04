import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Disk} from '../models/disk.model';
import {DiskService} from '../services/disk.service';
import {Person} from '../models/person.model';
import {PersonService} from '../services/person.service';

@Component({
  templateUrl: './issue-disk.component.html'
})
export class IssueDiskComponent implements OnInit {

  code: number;
  disk: Disk;
  persons: Person[];
  sub: any;

  constructor(private router: ActivatedRoute, private diskService: DiskService, private personService: PersonService) {

  }

  ngOnInit() {
    this.sub = this.router
      .queryParams
      .subscribe(params => {
        this.code = +params['code'];
      });
    this.diskService.getDisk(this.code)
      .subscribe( data => {
        this.disk = data;
      });
    this.personService.getPersons()
      .subscribe(data => {
        this.persons = data;
      });
  }

  issueDisk(pcode): void {
    this.diskService.issueDisk(this.disk, pcode)
      .subscribe(data => {
        alert('Диск выдан.');
      });
  }
}
