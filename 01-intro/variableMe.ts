let greetings: string = "James njoroge";

greetings.toLocaleUpperCase();
console.log(greetings);

// number

let userId = 334455.5;

userId.toFixed(2);

// boolean
let isLoggedIn: boolean = true;

// any

let hero: any = "superman";

function getHero() {
  return "thor";
}

hero = getHero();

export {}; // This tells the compiler that this file is a module
