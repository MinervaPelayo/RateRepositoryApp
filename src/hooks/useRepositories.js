import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const repositoriesResult = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  const fetchRepositories = async () => {
    if(repositoriesResult.data){
      setRepositories(repositoriesResult.data.repositories);
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, [repositoriesResult]);

  return { repositories, loading: repositoriesResult.loading, refetch: fetchRepositories };
};

export default useRepositories;