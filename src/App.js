import './App.css'
import React from 'react'
import Router from './components/application/router.js'
import { ApolloProvider } from '@apollo/client'
import { client } from './gql/graphqlConfig.js'

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router />
      </div>
    </ApolloProvider>
  )
}
