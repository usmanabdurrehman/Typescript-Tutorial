type Person = {
  name: string;
  age?: number;
};

const person: Person | undefined = { name: "Usman Rehman" };

const getPersonData = (person: Person | undefined) => {
  if (!person) return;
  console.log(person.age);
};

getPersonData(person);
