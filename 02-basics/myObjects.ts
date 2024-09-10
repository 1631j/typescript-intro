const User = {
  name: "james",
  email: "james@dev",
  isActive: true,
};

// function createUser({ name: string, isPaid: boolean }) {}

// let newUser = { name: "james", isPaid: false, email: "james@dev" };

// createUser(newUser);

// function createCourse(): { name: string; price: number } {
//   return { name: "React", price: 200 };
// }

//////// TYPE ALIASES ////////
/*
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  return { name: "", email: "", isActive: false };
}

createUser({ name: "", email: "", isActive: true });
*/

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

let myUser: User = {
  _id: "abc123",
  name: "james",
  email: "james@dev",
  isActive: true,
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber & cardDate & { cvv: number };

myUser.email = "j@j.com";

export {};
