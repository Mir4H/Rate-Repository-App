import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
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
