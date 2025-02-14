function greeter(person: string | string[]): string {
  if (Array.isArray(person)) {
    return "Hello, " + person.join(", ");
  } else {
    return "Hello, " + person;
  }
}

let user = ["Jane Doe", 3];
let user2 = "Jane Doe";
console.log(greeter(user));
console.log(greeter(user2));