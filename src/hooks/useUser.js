import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/queries";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";

const useUserAuth = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const { loading, error, data } = useQuery(GET_USER, {
    fetchPolicy: "cache-and-network",
    variables: { includeReviews: false },
  });

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return { user: data?.me, loading, error, signOut };
};

export default useUserAuth;
