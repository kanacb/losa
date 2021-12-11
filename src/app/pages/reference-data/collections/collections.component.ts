import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  open_collection(name: string){
    this.route.navigate([`/reference-data/collections/collection/${name}`]);
  }

}
