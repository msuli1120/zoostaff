import { Component, OnInit, Input } from '@angular/core';
import { Animal } from 'app/animal.model';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  filterByAge: string = 'all';
  filterByCareTaker: string = 'all';
  @Input() animals: Animal[];
  changeAge(option) {
    this.filterByAge = option;
    console.log(option);
  }
  changeCareTaker(option) {
    this.filterByCareTaker = option;
  }
  sexColor(animal) {
    if (animal.sex === 'Male') {
      return 'bg-primary';
    } else {
      return 'bg-info';
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
