"use strict"

//creates only one animal
//class Animal = {
   // eyes: 2,
    //legs: 4,
   // mouth: 1,
    //walk: function () {
       // console.log("I can walk");
    //}
//};

//console.log(Animal.eyes);

//to create multiple animals with the same properties, you can do animal 1, animal 2
//class animal2 = {
  //  eyes: 2,
    //legs: 4,
    //mouth: 1
//};


//define the Animal class
//class is a blueprint for defining objects, used to build different objects with similar properties

//class starts with capital letter
class Animal {
    //adding the properties of the class
    constructor(eyes, legs, mouth) {
        this.eyes = eyes;
        this.legs = legs;
        this.mouth = mouth;
    }

    //get features of an animal : a method or function
    getFeatures() {
        //another way: console.log(`I have ${this.eyes} eyes and ${this.legs}`)
        console.log("I have " + this.eyes + " eyes and " + this.legs + " legs");
    }
}

//an object
const animal1 = new Animal (2, 4, 1);
const animal2 = new Animal(2, 2, 1);

console.log(animal1.eyes);
console.log(animal2.legs);
animal2.getFeatures();
animal1.getFeatures();

