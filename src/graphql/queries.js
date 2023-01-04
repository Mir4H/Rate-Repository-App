import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          id
          description
          forksCount
          fullName
          language
          ownerAvatarUrl
          ratingAverage
          reviewCount
          stargazersCount
        }
      }
    }
  }
`;

export const GET_USER = gql`
  {
    me {
      id
      username
    }
  }
`;

export const GET_REPOSITORY = gql`
  query ($repositoryId: ID!) {
    repository(id: $repositoryId) {
      fullName
      description
      forksCount
      language
      ownerAvatarUrl
      ratingAverage
      reviewCount
      stargazersCount
      url
      reviews {
        edges {
          node {
            createdAt
            id
            rating
            text
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;
