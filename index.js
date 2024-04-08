// index.js
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:8080/query',
    cache: new InMemoryCache()
});

client.query({
    query: gql`
        query {
            products {
                id
                name
                description
                price
            }
        }
    `
}).then(result => console.log(result));

