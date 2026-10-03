function greet(name, faculty) {
    return "hello" + name + " from" + faculty + "!";
}
const greet_modern = (name, faculty) => `Hello ${name} from ${faculty}!`;  // template literal + arrow function

const student = { name: "ฟ้า", faculty: "CITU", year: 2 };
const { name, faculty } = student; 
const updated = { ...student, year: 3 }; 
console.log(name, faculty, updated);

//console.log(greet("peter", "IT"));
//console.log(greet_modern("peter", "IT")); 

const score = [90, 80, 70, 60, 50];
const buses = [
    { route: "NGV-1", passengers: 45, late: false },
    { route: "NGV-2", passengers: 62, late: true },
    { route: "NGV-3", passengers: 38, late: true },
    { route: "NGV-4", passengers: 51, late: false },
];

