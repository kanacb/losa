import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Navbar } from 'src/app/classes/navbar';

@Component({
  selector: 'app-reference-data',
  templateUrl: './reference-data.component.html',
  styleUrls: ['./reference-data.component.scss']
})
export class ReferenceDataComponent extends Navbar implements OnInit {

  constructor(private router : ActivatedRoute) { super();
}

  ngOnInit(): void {

  }

}
