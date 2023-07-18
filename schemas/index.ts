export const typeDefs = `#graphql
    type Product {
        id: ID!
        name: String!
        price: Float!
        stock: Int!
        createdAt: String!
        updatedAt: String!
    }
    type Query {
        getAllProducts: [Product]
        getProduct(id: ID!): Product
    }

    input ProductInput {
        name: String!
        price: Float!
        stock: Int!
    }

    input UpdateProductInput {
        id: ID!
        name: String
        price: Float
        stock: Int
    }

    input DeleteProductInput {
        id: ID!
    }

    type Mutation {
        createProduct(input: ProductInput): Product
        updateProduct(input: UpdateProductInput): Product
        deleteProduct(input: DeleteProductInput): Product
    }
`;
