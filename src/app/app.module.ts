import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataCollectionComponent } from './pages/data-collection/data-collection.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemographicsComponent } from './pages/data-collection/demographics/demographics.component';
import { ReferenceDataComponent } from './pages/reference-data/reference-data.component';
import { CreateComponent } from './pages/reference-data/create/create.component';
import { UpsertComponent } from './pages/reference-data/upsert/upsert.component';
import { CollectionsComponent } from './pages/reference-data/collections/collections.component';
import { CollectionComponent } from './pages/reference-data/collection/collection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSidenavModule } from '@angular/material/sidenav'

@NgModule({
  declarations: [
    AppComponent,
    DataCollectionComponent,
    HomeComponent,
    DemographicsComponent,
    ReferenceDataComponent,
    CreateComponent,
    UpsertComponent,
    CollectionsComponent,
    CollectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
