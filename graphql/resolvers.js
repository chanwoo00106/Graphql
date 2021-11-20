import { people, getId } from "./db";

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getId(id),
  },
};

export default resolvers;
