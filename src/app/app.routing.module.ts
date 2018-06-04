import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MainPageComponent} from './main/main-page.component';
import {DiskListComponent} from './disk-list/disk-list.component';
import {AddDiskComponent} from './add-disk/add-disk.component';
import {PersonListComponent} from './person-list/person-list.component';
import {AddPersonComponent} from './add-person/add-person.component';
import {EditDiskComponent} from './edit-disk/edit-disk.component';
import {EditPersonComponent} from './edit-person/edit-person.component';
import {IssueDiskComponent} from './issue-disk/issue-disk.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'diskList', component: DiskListComponent },
  { path: 'addDisk', component: AddDiskComponent },
  { path: 'addPerson', component: AddPersonComponent },
  { path: 'personList', component: PersonListComponent },
  { path: 'editDisk', component: EditDiskComponent},
  { path: 'editPerson', component: EditPersonComponent},
  { path: 'issueDisk', component: IssueDiskComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
