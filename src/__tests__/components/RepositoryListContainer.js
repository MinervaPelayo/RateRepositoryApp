import React from 'react';
import { render } from '@testing-library/react-native';
import { RepositoryListContainer } from '../../components/RepositoryList';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const firstTestRepository = repositories.edges[0].node;
      const secondTestRepository = repositories.edges[1].node;

      const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);

      const repositoryFullNames = getAllByTestId('repositoryFullName');
      const [firstName, secondName] = repositoryFullNames;
      expect(firstName).toHaveTextContent(firstTestRepository.fullName);
      expect(secondName).toHaveTextContent(secondTestRepository.fullName);

      const repositoryDescriptions = getAllByTestId('repositoryDescription');
      const [firstDescription, secondDescription] = repositoryDescriptions;
      expect(firstDescription).toHaveTextContent(firstTestRepository.description);
      expect(secondDescription).toHaveTextContent(secondTestRepository.description);

      const repositoryLanguages = getAllByTestId('repositoryLanguage');
      const [firstLanguage, secondLanguage] = repositoryLanguages;
      expect(firstLanguage).toHaveTextContent(firstTestRepository.language);
      expect(secondLanguage).toHaveTextContent(secondTestRepository.language);

      const repositoryFooters = getAllByTestId('repositoryFooter');

      expect(repositoryFooters[0]).toHaveTextContent('21.9k');
      expect(repositoryFooters[1]).toHaveTextContent('1.6k');
      expect(repositoryFooters[2]).toHaveTextContent(firstTestRepository.reviewCount);
      expect(repositoryFooters[3]).toHaveTextContent(firstTestRepository.ratingAverage);

      expect(repositoryFooters[4]).toHaveTextContent('1.8k');
      expect(repositoryFooters[5]).toHaveTextContent(secondTestRepository.forksCount);
      expect(repositoryFooters[6]).toHaveTextContent(secondTestRepository.reviewCount);
      expect(repositoryFooters[7]).toHaveTextContent(secondTestRepository.ratingAverage);
    });
  });
});