const person = {
  name: "Brian Kipkosgei",
  county: "Nandi",
  age: 24,
  destination: "australia",
  profile: function () {
    console.log(
      `I am ${this.name} from ${this.county}, ${this.age} years old and my ddestination location is ${this.destination}`
    );
  },
};
console.log(person);
person.profile();
