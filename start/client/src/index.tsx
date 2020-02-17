import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import ReactDOM from 'react-dom'; 
import Pages from './pages';
import injectStyles from './styles';

// previous variable declarations


// ApolloクライアントをReactに接続するには、ApolloProviderコンポーネントでアプリをラップします
// Reactアプリをラップし、クライアントをコンテキストに配置します。これにより、コンポーネントツリーのどこからでもアクセスできます。
injectStyles();
ReactDOM.render(
  <ApolloProvider client={client}>
    <Pages />
  </ApolloProvider>, 
  document.getElementById('root')
);