import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css'
})
export class UserDatails {
  @Input() user: any = {};
  @Output() evento = new EventEmitter();

  actualizarDato() {
    this.user.name = 'Petter';
    this.evento.emit(this.user);
  }

}
