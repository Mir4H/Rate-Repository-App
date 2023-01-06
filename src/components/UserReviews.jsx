import useUserReviews from "../hooks/useUserReviews";
import { FlatList, View } from "react-native";
import ReviewItem from "./ReviewItem";
import { ItemSeparator } from "./RepositoryList";
import { AntDesign } from '@expo/vector-icons'; 

const UserReviews = () => {
  const { userReviews, fetchMore, refetch } = useUserReviews({
    includeReviews: true,
    first: 7,
  });

  const reviewsList = userReviews
    ? userReviews?.edges.map((edge) => edge.node)
    : [];

  const onEndReach = () => {
    fetchMore();
  };

  if (!userReviews) {
    return (
        <View style={{alignItems: "center", paddingTop: 50}}>
        <AntDesign name="hourglass" size={24} color="black" />
      </View>
    );
  }

  return (
    <FlatList
      data={reviewsList}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} refetch={refetch} />}
      keyExtractor={({ id }) => id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.3}
    />
  );
};

export default UserReviews;
