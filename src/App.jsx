import Dashboard from "./screen/dashboard";
import { globalStyles } from "./styles/globalStyles";
import { Global } from "@emotion/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/ensdomains/ens",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Dashboard />
    </ApolloProvider>
  );
}

export default App;
