import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import {HttpClientModule} from '@angular/common/http';
import {MainPageComponent} from './main/main-page.component';
import {DiskListComponent} from './disk-list/disk-list.component';
import {DiskService} from './services/disk.service';
import {AddDiskComponent} from './add-disk/add-disk.component';
import {PersonListComponent} from './person-list/person-list.component';
import {PersonService} from './services/person.service';
import {AddPersonComponent} from './add-person/add-person.component';
import {EditDiskComponent} from './edit-disk/edit-disk.component';
import {EditPersonComponent} from './edit-person/edit-person.component';
import {IssueDiskComponent} from './issue-disk/issue-disk.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DiskListComponent,
    AddDiskComponent,
    PersonListComponent,
    AddPersonComponent,
    EditDiskComponent,
    EditPersonComponent,
    IssueDiskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DiskService, PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
