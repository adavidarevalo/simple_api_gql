import { productsMutations, productsQueries } from "./products.resolvers";

export const resolvers = {
  Query: {
    ...productsQueries,
  },
  Mutation: {
    ...productsMutations,
  },
};
