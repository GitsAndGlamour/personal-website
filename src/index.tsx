import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify';
import gql from 'graphql-tag';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import awsExports from './aws-exports';
import { ApolloProvider } from 'react-apollo';

import { listPosts } from './graphql/queries';

const client = new AWSAppSyncClient({
    url: awsExports.aws_appsync_graphqlEndpoint,
    cacheOptions: {},
    region: awsExports.aws_appsync_region,
    auth: {
        type: AUTH_TYPE.API_KEY,
        apiKey: awsExports.aws_appsync_apiKey,
    }
});

client.query({
    query: gql(listPosts)
}).then(({ data }) => {
    console.log(data);
});

Amplify.configure(awsExports);
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
