import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = ({ values }) => {
  const [repositories, setRepositories] = useState();
  const { orderBy, orderDirection, searchKeyword } = values;
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: { orderBy: orderBy, orderDirection: orderDirection, searchKeyword: searchKeyword },
  });

  useEffect(() => {
    if (!error && !loading) {
      try {
        setRepositories(data.repositories);
      } catch (error) {
        console.log(error);
      }
    }
  }, [data, loading, error]);

  return { repositories, loading, error };
};

export default useRepositories;
