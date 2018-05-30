import { Component, OnInit } from '@angular/core';


class Greeting {
  message: string;
  constructor(message: string){
    this.message = message;
  }

  greet(){
    return "Hello, " + this.message;
  }
}

class Animal{
  name: string;

  constructor(animalName: string){
    this.name = animalName;
  }

  move(distance: number = 0){
    console.log(`${this.name} moved ${distance}m.`)
  }
}

class Dog extends Animal {
  constructor(name: string){
    super(name);
  }

  bark(){
    console.log("Woof!");
  }
  move(distanceMoveByDog: number = 5){
    super.move(distanceMoveByDog);
  }
}
class Horse extends Animal{
  // create constructor to set animal name
  // create move to set default distance to 44
  constructor(name: string){
    super(name);
  }

  move(distanceMoveByHorse: number = 45){
    console.log('Horse is charging...');
    super.move(distanceMoveByHorse);
  }

}

class User{
  private name: string;

  constructor (name: string){
    this.name = name;
  }
}

class John extends User {
  constructor(){
    super("John");
  }
}

class Employee {
  private name: string;

  constructor (name: string){
    this.name = name;
  }
}


// interfaces
interface Stuff {
  name: string;
  age: number;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';


  
  ngOnInit() {
    // this.classTesting();
    // this.animalClassTesting();
    const positions: number[] = [234, 245, 23, 534];
    const colors: string[] = ["red", "bliue", "green", "yellow"];
    console.log();
    console.log();
  }

  classTesting(){
    const greeter = new Greeting('world.');
    console.log(greeter.greet);
  }

  animalClassTesting() {
    const dog = new Dog("Goofy");
    dog.bark();
    dog.move(20);

    const horse: Animal = new Horse("buck");
    horse.move(20);
  }

  classCompatibilityTesting(){
    let user = new User("Doe");
    const john = new John();

    console.log(user);
    console.log(john);

    const employee = new Employee("Smith");
    console.log(employee);

    user = john;
    console.log(user);
    

  }

  interfaceTesting(x: stuff){
    console.log(`${x.name} is ${x.age} years old and works in ${x.department}.`)
  }
}
