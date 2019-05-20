import { resolvers } from "./resolvers";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = `
    type User {
        id: ID
        firstName: String
        lastName: String
        userName: String
        password: String
        email: String
    }
    
    type Query {
        getOneUser(id: ID): User
        getAllUsers: [User]
    }

    input UserInput {
        id: ID
        firstName: String!
        lastName: String
        userName: String
        password: String
        email: String
    }

    type Mutation {
        createUser(input: UserInput): User
        updateUser(input: UserInput): User
        deleteUser(id: ID!): String
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
