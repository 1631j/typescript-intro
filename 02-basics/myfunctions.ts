function addTwo(num: number): number {
  return num + 2;
  // return "hello";
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

let myValue = addTwo(5);
getUpper("4");

signUpUser("John", "njoro@dev", false);
loginUser("njoro", "njoro@dev");

// function getValue(myVal: number) {
//   if (myVal > 10) {
//     return true;
//   }
//   return "200 OK";
// }

const getHello = (s: string): string => {
  return "";
};

const heros = ["Superman", "thor", "batman"];
// const heros = [1, 2, 3];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.error(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
