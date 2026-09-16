function greet(name, faculty) {
    return "hello" + name + " from" + faculty;

}
const greet_modern = (name, faculty) => `Hello ${name} from ${faculty}`;

console.log(greet("peter", "IT"));
console.log(greet_modern("peter", "IT"));