export const people = [
  {
    id: "1",
    name: "chanwoo",
    age: 17,
    description: "developer",
  },
  {
    id: "2",
    name: "chanwoo",
    age: 17,
    description: "developer",
  },
  {
    id: "3",
    name: "chanwoo",
    age: 17,
    description: "developer",
  },
  {
    id: "4",
    name: "chanwoo",
    age: 17,
    description: "developer",
  },
  {
    id: "5",
    name: "chanwoo",
    age: 17,
    description: "developer",
  },
];

export const getId = (id) => {
  const result = people.filter((person) => person.id === String(id));
  return result[0];
};
