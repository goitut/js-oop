class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const Person1 = new Person("Goi", "male");
Person1.greet();
console.log(Person1["gender"]);