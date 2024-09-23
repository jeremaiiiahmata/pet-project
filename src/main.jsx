import React from 'react';
import ReactDOM from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css' // import for bootstrap components


const client = new ApolloClient ({
  uri: 'http://localhost:3030/',
  cache: new InMemoryCache()
})

// http://localhost:3030/

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ApolloProvider client={client}>
     <App />
    </ApolloProvider>
)
