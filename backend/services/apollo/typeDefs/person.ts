import { gql } from 'apollo-server-express';

export default gql`
    type Query {
        person(id: ID!): Person
        persons: [Person]!
    }

    type Mutation {
        create(name: String!): Person!
        update(id: ID!, name: String!): Person
        delete(id: ID!): Person
    }

    type Subscription {
        _: String
    }

    type Person {
        id: ID!
        name: String!
    }
`;
