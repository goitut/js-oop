class Car {
  #fuel;

  constructor(initialFuel) {
    this.#fuel = initialFuel;
  }

  drive(distance) {
    if (this.#fuel >= distance / 10) {
      this.#fuel -= distance / 10;
    } else {
      console.log("Not enough fuel to complete the trip. ")
    }
  }

  refuel(gallons) {
    this.#fuel += gallons;
    console.log(`Refueled with ${gallons} gallons.`)
  }

  getFuelLevel() {
    return `current fuel level: ${this.#fuel} gallons.`
  }
}

const myCar = new car (20);
myCar.drive(150);
myCar.refuel(5);
console.log(myCar.getFuelLevel());