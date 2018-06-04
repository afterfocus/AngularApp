import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {Disk} from '../models/disk.model';
import {DiskService} from '../services/disk.service';
import {Subscription} from 'rxjs';
import {Person} from '../models/person.model';

@Component({
  templateUrl: './disk-list.component.html',
})
export class DiskListComponent implements OnInit {

  disks: Disk[];
  code: number;
  sub: any;

  constructor(private route: ActivatedRoute, private router: Router, private diskService: DiskService) {

  }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.code = +params['code'] || -1;
      });
    this.diskService.getDisks(this.code)
      .subscribe(data => {
        this.disks = data;
      });
  }

  deleteDisk(disk: Disk): void {
    if (confirm('Удалить диск?')) {
      this.diskService.deleteDisk(disk.diskID)
        .subscribe(data => {
          this.disks = this.disks.filter(d => d !== disk);
        });
    }
  }

  returnDisk(disk: Disk): void {
    if (confirm('Вернуть диск?')) {
      this.diskService.returnDisk(disk)
        .subscribe(data => {
          this.disks.find(d => d.diskID === disk.diskID).person = null;
        });
    }
  }

  editDisk(disk: Disk): void {
    this.router.navigate(['/editDisk'], {queryParams: {code: disk.diskID}});
  }

  issueDisk(disk: Disk): void {
    this.router.navigate(['/issueDisk'], {queryParams: {code: disk.diskID}});
  }

  editPerson(person: Person): void {
    this.router.navigate(['/editPerson'], {queryParams: {code: person.personID}});
  }
}
