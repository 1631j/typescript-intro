// const user: (string | number)[] = ["hc", 1]

let toUser: [string, number, boolean];

toUser = ["hc", 1, true];

let rgb: [number, number, number] = [255, 0, 0];

type User = [string, number];

const newUser: User = ["example@google.com", 112];

newUser[1] = 113;
newUser.push();

export {};
