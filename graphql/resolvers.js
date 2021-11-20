const chan = {
  name: "chanwoo",
  age: 17,
  description: "developer",
};

const resolvers = {
  Query: {
    person: () => chan,
  },
};

export default resolvers;
