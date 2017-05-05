import { Component, OnInit } from '@angular/core';
import { Animal } from 'app/animal.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AnimalService } from './animal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AnimalService, AngularFireDatabase]
})
export class AppComponent {
  title = 'The Zoo';
  animals: FirebaseListObservable<any[]>;
  constructor(private animalService: AnimalService) {}
  ngOnInit() {
    this.animals = this.animalService.getAnimals();
  }
  addAnimal(newAnimal: Animal) {
    this.animals.push(newAnimal);
  }
}
