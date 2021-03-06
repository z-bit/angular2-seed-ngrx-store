import {Component} from '@angular/core';

@Component({
  selector: 'home',
  template: require('./home.html'),
  styles: [require('./home.css')],
  providers: [],
  directives: [],
  pipes: []
})
export class Home {

  constructor() {}

  ngOnInit() {

  }

  public showAlert(event: Event) {
    alert(`Hello ${event.type}`);
  }
}
