import { gql } from '@apollo/client';
import { REPOSITORY_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_DETAILS}
  query {
    repositories {
      totalCount
      edges {
        node {
          ...RepositoryDetails
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  ${REPOSITORY_DETAILS}
  query Repository($id: ID!) {
      repository(id: $id) {
        url
        ...RepositoryDetails
    }
  }
`;

export const GET_LOGGED_USER = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;

export const GET_REVIEWS = gql`
  query reviews ($id: ID!) {
      repository(id: $id) {
        id
        fullName
        reviews {
          edges {
            node {
              id
              text
              rating
              createdAt
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