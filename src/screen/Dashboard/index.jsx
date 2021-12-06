import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import DomainCard from "../../components/common/DomainCard";
import Layout from "../../components/layout";
import SearchInput from "../../components/common/SearchInput";
import { Header, TitlePage, List, ListItem, LoadMoreButton } from "./styles";
import { useDebounce } from "../../utils/useDebounce";
import { ReactComponent as Loader } from "../../assets/icons/loader.svg";
import { friendlyEpochTimeToDate } from "../../utils/formatDate";
import { GET_DOMAINS } from "../../graphql/queries";
import { LIMIT_PER_PAGE } from "../../utils/constants";

export default function Dashboard() {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const debouncedSetQuery = useDebounce(setSearchValue, 800);

  const {
    loading: isLoadingRequest,
    data,
    error,
    fetchMore,
  } = useQuery(GET_DOMAINS, {
    variables: { first: LIMIT_PER_PAGE, skip: 0, search: searchValue },
  });
  const isLoading = loading || isLoadingRequest;
  const registrations = data?.registrations ?? [];

  const handleChangeSearch = (e) => {
    setLoading(true);
    debouncedSetQuery(() => {
      setLoading(false);
      return e.target.value;
    });
  };

  const handleLoadMore = () => {
    fetchMore({ variables: { skip: registrations.length } });
  };

  return (
    <Layout>
      <Header>
        <div>
          <TitlePage>Dashboard ENS Lookup</TitlePage>
          <p>Sorted by recent registrations</p>
        </div>
        <SearchInput onChange={handleChangeSearch} />
      </Header>
      {error ? <div>Could not find any data, try again later!</div> : null}
      {isLoading ? (
        <Loader aria-label="Loading" />
      ) : registrations.length ? (
        <List>
          {registrations.map((registration) => (
            <li key={registration.id}>
              <DomainCard
                name={registration.domain.name}
                registrantAddress={registration.registrant.id}
                ethAddress={registration.domain.resolvedAddress?.id}
                registrationDate={friendlyEpochTimeToDate(registration.registrationDate)}
                expiryDate={friendlyEpochTimeToDate(registration.expiryDate)}
              />
            </li>
          ))}
        </List>
      ) : !registrations.length ? (
        <p>No results found</p>
      ) : null}

      {registrations?.length && !isLoading ? (
        <LoadMoreButton type="button" onClick={handleLoadMore}>
          Load More
        </LoadMoreButton>
      ) : null}
    </Layout>
  );
}
