import { gql } from 'apollo-server'

export const typeDefs = gql`
type User{
    id:ID!
    name: String!
    username:String!
    age:Int!
    nationality:Nationality!
    friends:[User]
}
type Query{
    users:[User]!
    user(id:ID!):User!
}

type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }
  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

enum Nationality{
    CANADA
    BRAZIL
    CHILE
    INDIA
    GERMANY
}
`