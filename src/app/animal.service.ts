import { Injectable } from '@angular/core';
import { Animal } from './animal.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AnimalService {
  animals: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFireDatabase) {
    this.animals = angularFire.list('animals');
  }

  getAnimals() {
    return this.animals;
  }
}
