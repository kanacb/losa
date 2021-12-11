import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-upsert',
  templateUrl: './upsert.component.html',
  styleUrls: ['./upsert.component.scss']
})
export class UpsertComponent implements OnInit {

  public f : FormGroup = this.fromCollection();
  collection = "";
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params=>{
      // console.log(params);
      this.collection = params.name;
    });
  }

  onSubmit(){
    alert('Submitted!');
  }

  fromCollection(){
    const form = new FormGroup({
      Field1 : new FormControl()
    })
    return form;
  }

  onReset(){
    this.f.reset();
  }

}
