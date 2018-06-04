import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {Disk} from '../models/disk.model';
import {DiskService} from '../services/disk.service';

@Component({
  templateUrl: './add-disk.component.html'
})
export class AddDiskComponent {

  disk: Disk = new Disk();

  constructor(private router: Router, private diskService: DiskService) {

  }

  createDisk(): void {
    this.diskService.createDisk(this.disk)
      .subscribe(data => {
        alert('Диск добавлен.');
      });
  }
}
