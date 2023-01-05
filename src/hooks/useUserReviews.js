import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/queries";

const useUserAuth = () => {

  const { loading, error, data } = useQuery(GET_USER, {
    fetchPolicy: "cache-and-network",
    variables: { includeReviews: true}
  });


  return { userReviws: data?.me.reviews, loading, error };
};

export default useUserAuth;
