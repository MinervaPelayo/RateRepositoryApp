import { useState, useEffect } from 'react';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = () => {
  const id = useParams().id;
  const [repository, setRepository] = useState();
  const repositoryResult = useQuery(GET_REPOSITORY, {
    variables: { id: id },
    fetchPolicy: 'cache-and-network',
  });

  const fetchRepository = async () => {
    if(repositoryResult.data){
      setRepository(repositoryResult.data.repository);
    }
  };

  useEffect(() => {
    fetchRepository();
  }, [repositoryResult]);

  return { repository, loading: repositoryResult.loading, refetch: fetchRepository };
};

export default useRepository;