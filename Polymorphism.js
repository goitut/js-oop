class Cat {
  speak() {
    return "chip";
  }
}


function makeAnimalSpeak (animal) {
  console.log(animal.speak());
}

const myCat = new Cat();
makeAnimalSpeak(myCat);