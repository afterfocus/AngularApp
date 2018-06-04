import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Disk} from '../models/disk.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class DiskService {

  constructor(private http: HttpClient) {
  }

  private url = '/disk';

  public getDisks(code) {
    if (code === -1) {
      return this.http.get<Disk[]>(this.url);
    } else { return this.http.get<Disk[]>(this.url + '/findAllById/' + code); }
  }

  public getDisk(id) {
    return this.http.get<Disk>(this.url + '/' + id);
  }

  public updateDisk(disk) {
    return this.http.post<Disk>(this.url + '/update', disk);
  }

  public issueDisk(disk, pcode) {
    return this.http.post<Disk>(this.url + '/issue/' + pcode, disk);
  }

  public deleteDisk(id) {
    return this.http.delete(this.url + '/' + id);
  }

  public createDisk(disk) {
    return this.http.post<Disk>(this.url, disk);
  }

  public returnDisk(disk) {
    return this.http.post<Disk>(this.url + '/return' , disk);
  }
}
