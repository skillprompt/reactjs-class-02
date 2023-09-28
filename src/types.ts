// string
// number
// boolean
// Array - Array or []
// Object - {} or Record

type Country = { name: string; id: number; capital?: string };

const numb: number = 1;
numb;
// const test: { name: string; id: number }[] = [
//   {
//     name: "nepal",
//     id: 1,
//   },
// ];
const test: Country[] = [
  {
    name: "nepal",
    id: 1,
  },
];
test;
// const country: {
//   id: number;
//   name: string;
// } = {
//   id: 1,
//   name: "Nepal",
// };
const country: Country = {
  id: 1,
  name: "Nepal",
  capital: "ktm",
};
country;

// inference
const newCountry = {
  id: 2,
  name: "India",
  capital: "Delhi",
};
newCountry;
