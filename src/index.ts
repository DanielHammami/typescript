type Users = {
  name: string;
  age: number;
  occupation?: string;
};

let users: Users[] = [
  {
    name: "John Smith",
    age: 30,
    occupation: "Software engineer",
  },
  {
    name: "Kate Müller",
    age: 28,
  },
];

/////////////////////////////////////

type Bird = {
  fly: () => void;
};

type Fish = {
  swim: () => void;
};

type Pet = Bird | Fish;

/////////////////////////////////////

const getUser = () => void;
const bar = () => void;
let foo;

let user = getUser();
console.log((user?.address?.street);
let x = foo ?? bar();

/////////////////////////////////////

let value: unknown = "a";
if (typeof value === "string")
  console.log(value.toUpperCase())