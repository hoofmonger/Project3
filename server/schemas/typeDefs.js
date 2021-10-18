const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Product {
    _id: ID!
    name: String!
    description: String!
    price: Float
    quantity: Int
    image: String
  }

  type Checkout {
    session: ID
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type Auth {
    token: ID!
    user: User
  }
  type Category {
    _id: ID
    name: String
  }
  type Query {
    users: [User]
    user(username: String!): User
    products: [Product]
    searchResults(name: String): [Product]
    product(productId: ID!): Product
    me: User
    checkout(products: [ID]!): Checkout
    order(_id: ID!): Order
    categories: [Category]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    login(email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
  }
`;

module.exports = typeDefs;
