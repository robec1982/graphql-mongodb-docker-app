import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';
import resolvers from './resolvers'
require("dotenv").config();

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, GraphQL here!');
});

const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
})); // Endpoint

const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, (() => console.log(`Running server on http://localhost:${process.env.NODE_LOCAL_PORT}/graphql`)));