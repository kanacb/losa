import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataCollectionComponent } from './pages/data-collection/data-collection.component';
import { DemographicsComponent } from './pages/data-collection/demographics/demographics.component';
import { HomeComponent } from './pages/home/home.component';

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
        path: 'demographics',
        component: DemographicsComponent
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
