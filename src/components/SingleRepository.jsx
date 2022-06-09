import React from 'react';
import { FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepository from '../hooks/useRepository';
import ItemSeparator from './ItemSeparator';
import ReviewItem from './ReviewItem';
import useReviews from '../hooks/useReviews';

const SingleRepository = () => {
  const { repository } = useRepository();
  const repoDetails = repository ? repository : {};

  const { reviews } = useReviews();
  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItem item={repoDetails} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default SingleRepository;