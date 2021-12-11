import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataCollectionComponent } from './pages/data-collection/data-collection.component';
import { DemographicsComponent } from './pages/data-collection/demographics/demographics.component';
import { HomeComponent } from './pages/home/home.component';
import { CollectionComponent } from './pages/reference-data/collection/collection.component';
import { CollectionsComponent } from './pages/reference-data/collections/collections.component';
import { CreateComponent } from './pages/reference-data/create/create.component';
import { ReferenceDataComponent } from './pages/reference-data/reference-data.component';
import { UpsertComponent } from './pages/reference-data/upsert/upsert.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'data-collection',
    component: DataCollectionComponent,
    children:
    [
      {
        path: '',
        component: DemographicsComponent
      },
      {
        path: 'demographics',
        component: DemographicsComponent
      }
    ]
  },
  {
    path: 'reference-data',
    component: ReferenceDataComponent,
    children:
    [
      {
        path: '',
        component: CollectionsComponent
      },
      {
        path: 'collections/collection/:name',
        component: CollectionComponent
      },
      {
        path: 'collections',
        component: CollectionsComponent
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'collections/insert/:name',
        component: UpsertComponent
      },
      {
        path: 'collections/update/:name/:id',
        component: UpsertComponent
      }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
