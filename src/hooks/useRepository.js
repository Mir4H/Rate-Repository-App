import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = ({ id }) => {
  const [repository, setRepository] = useState();
  const { loading, error, data } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: { repositoryId: id },
  });

  useEffect(() => {
    if (!error && !loading) {
      try {
        setRepository(data.repository);
      } catch (error) {
        console.log(error);
      }
    }
  }, [data, loading, error]);

  return { repository, loading, error };
};

export default useRepository;
