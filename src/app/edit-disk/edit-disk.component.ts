import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Disk} from '../models/disk.model';
import {DiskService} from '../services/disk.service';

@Component({
  templateUrl: './edit-disk.component.html'
})
export class EditDiskComponent implements OnInit {

  code: number;
  disk: Disk;
  sub: any;

  constructor(private router: ActivatedRoute, private diskService: DiskService) {

  }

  ngOnInit() {
    this.sub = this.router
      .queryParams
      .subscribe(params => {
        this.code = +params['code'] || 0;
      });
    this.diskService.getDisk(this.code)
      .subscribe( data => {
        this.disk = data;
      });
  }

  editDisk(): void {
    this.diskService.updateDisk(this.disk)
      .subscribe(data => {
        alert('Диск изменен.');
      });
  }
}
