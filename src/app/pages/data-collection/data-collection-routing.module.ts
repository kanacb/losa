import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemographicsComponent } from './demographics/demographics.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataCollectionRoutingModule { }
