// json generator
// https://json-generator.com/
//json
let 회원정보 = [
  {
    _id: "642a621dae2fdbd1340f7e48",
    index: 0,
    age: 39,
    eyeColor: "brown",
    name: "Henry Chan",
    gender: "male",
    company: "BLANET",
  },
  {
    _id: "642a621d54673c54055cda90",
    index: 1,
    age: 32,
    eyeColor: "brown",
    name: "Shelby Greer",
    gender: "female",
    company: "MICRONAUT",
  },
  {
    _id: "642a621d6d91bc578d311ca6",
    index: 2,
    age: 24,
    eyeColor: "brown",
    name: "Jacqueline Peck",
    gender: "female",
    company: "DIGITALUS",
  },
  {
    _id: "642a621d8e4bb0ecf2f06383",
    index: 3,
    age: 28,
    eyeColor: "blue",
    name: "Gertrude Kramer",
    gender: "female",
    company: "INVENTURE",
  },
  {
    _id: "642a621d7f9feb32dddb5c5b",
    index: 4,
    age: 29,
    eyeColor: "green",
    name: "Manuela Hunter",
    gender: "female",
    company: "CALCULA",
  },
];

회원정보[0];
회원정보[0]["name"];
회원정보[1]["company"];

let 나이평균 =
  (회원정보[0]["age"] +
    회원정보[1]["age"] +
    회원정보[2]["age"] +
    회원정보[3]["age"] +
    회원정보[4]["age"] +
    회원정보[5]["age"]) /
  6;
console.log(나이평균);
