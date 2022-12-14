import { ApolloServer } from "apollo-server";
import { typeDefs } from './schema/type-defs'
import { resolvers } from './schema/resolvers'

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`YOUR API IS RUNNING AT: ${url} :)`);
});