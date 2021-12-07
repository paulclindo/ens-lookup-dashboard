import Dashboard from "./screen/Dashboard";
import { globalStyles } from "./styles/globalStyles";
import { Global } from "@emotion/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/ensdomains/ens",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          registrations: {
            keyArgs: ["where"],
            merge: (existing = [], incoming) => {
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  }),
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
