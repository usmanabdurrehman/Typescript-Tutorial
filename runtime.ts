class Person {
  #age: number;

  constructor(age: number) {
    this.#age = age;
  }
}

const person = new Person(43);

// @ts-ignore
console.log(person.#age);
