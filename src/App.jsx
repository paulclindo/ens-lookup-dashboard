import Dashboard from "./screen/Dashboard";
import { globalStyles } from "./styles/globalStyles";
import { Global } from "@emotion/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// TODO: support ENS reverse resolution
async function getReverseDomain(address) {
  try {
    const provider = ethers.providers.getDefaultProvider();
    const name = await provider.lookupAddress(address);
    return name;
  } catch (error) {
    console.log(error);
    return null;
  }
}

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
