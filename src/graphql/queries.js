import { gql } from "@apollo/client";

export const GET_DOMAINS = gql`
  query GetDomains($first: Int, $skip: Int, $search: String) {
    registrations(
      where: { labelName_contains: $search }
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
        id
        name
        labelName
        resolvedAddress {
          id
        }
      }
    }
  }
`;
