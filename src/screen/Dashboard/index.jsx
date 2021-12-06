import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import DomainCard from "../../components/common/DomainCard";
import Layout from "../../components/layout";
import SearchInput from "../../components/common/SearchInput";
import { Header, TitlePage, List, ListItem, LoadMoreButton } from "./styles";
import { formatBigIntToDate } from "../../utils/formatDate";
import { truncateString } from "../../utils/truncate";
import { ReactComponent as Loader } from "../../assets/icons/loader.svg";
import { useDebounce } from "../../utils/debounce";

const GET_DOMAINS = gql`
  query GetDomains($first: Int, $skip: Int, $search: String) {
    registrations(
      where: { labelName_not: null, labelName_contains: $search }
      orderBy: registrationDate
      orderDirection: desc
      first: $first
      skip: $skip
    ) {
      id
      expiryDate
      registrationDate
      labelName
      registrant {
        id
      }
      domain {
        name
        id
        labelhash
        labelName
      }
    }
  }
`;

export default function Dashboard() {
  const limit = 4;
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const debouncedSetQuery = useDebounce(setSearchValue, 800);

  const {
    loading: isLoadingRequest,
    data,
    error,
    fetchMore,
  } = useQuery(GET_DOMAINS, {
    variables: { first: limit, skip: 0, search: searchValue },
  });
  const isLoading = loading || isLoadingRequest;
  const registrations = data?.registrations;

  const handleChangeSearch = (e) => {
    setLoading(true);
    debouncedSetQuery(() => {
      setLoading(false);
      return e.target?.value;
    });
  };

  const handleLoadMore = () => {
    fetchMore({ variables: { skip: registrations.length } });
  };

  return (
    <Layout>
      <Header>
        <TitlePage>Dashboard ESN Lookup</TitlePage>
        <SearchInput onChange={handleChangeSearch} />
      </Header>
      <List>
        {error ? <div>Could not find any data, try again later!</div> : null}
        {isLoading ? (
          <Loader />
        ) : registrations.length ? (
          registrations.map((registration) => (
            <li key={registration.id}>
              <DomainCard
                name={registration.domain.name}
                registrantAddress={truncateString(registration.registrant.id)}
                ethAddress={truncateString(registration.domain.labelhash)}
                registrationDate={formatBigIntToDate(registration.registrationDate)}
                expiryDate={formatBigIntToDate(registration.expiryDate)}
              />
            </li>
          ))
        ) : !registrations.length ? (
          <p>No results found</p>
        ) : null}

        {registrations?.length && !isLoading ? (
          <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
        ) : null}
      </List>
    </Layout>
  );
}
