import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/queries";

const useUserReviews = (variables) => {
  const { data, loading, fetchMore, refetch, ...result } = useQuery(GET_USER, {
    fetchPolicy: "cache-and-network",
    variables,
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }
    fetchMore({
      variables: {
        after: data?.me.reviews.pageInfo.endCursor,
        includeReviews: true,
        ...variables,
      },
    });
  };
  return {
    userReviews: data?.me.reviews,
    fetchMore: handleFetchMore,
    loading,
    refetch,
    ...result,
  };
};

export default useUserReviews;
