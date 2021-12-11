import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Navbar {
  navBarActivate(ev: Event){
    const id = (ev.target as Element).id;
    var x = document.getElementsByClassName('nav-link');
    for (var i = 0; i < x.length; i++) {
        x[i]?.setAttribute("class","nav-link");
    }
    document.getElementById(id)?.setAttribute("class","nav-link active");
    const _navbar = document.getElementsByClassName('navbar-toggler')
    const _openned = _navbar[0].hasAttribute('navbar-collapse in')

    if (_openned === true) {
      _navbar[0].setAttribute("class",'navbar-collapse out');
    }
  }
}
