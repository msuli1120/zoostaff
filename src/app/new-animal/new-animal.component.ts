import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Animal } from 'app/animal.model';

@Component({
  selector: 'app-new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.css']
})
export class NewAnimalComponent implements OnInit {
  editForm: boolean = false;
  @Output() newAnimalSender = new EventEmitter();
  submit(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string,  dislikes: string){
    var newAnimal: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimal);
    this.editForm = false;
  }
  constructor() { }

  ngOnInit() {
  }

}
