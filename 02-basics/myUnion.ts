let score: number | string = 33;

score = "thirty-three";

score = 33;

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let james: User | Admin = {
  name: "James",
  id: 1,
};

james = {
  username: "james",
  id: 1,
};

// function getDbId(id: number | string) {
//   // making API call to get user data
//   console.log(`DB id is ${id}`);
// }
getDbId(33);
getDbId("33");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

/// array
const data1: number[] = [1, 2, 3, 4];
const data2: string[] = ["1", "2", "3", "4"];
const data: (number | string | boolean)[] = [1, 2, 3, "4", true];

export {};
