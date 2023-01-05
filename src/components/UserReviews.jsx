import { View } from "react-native";
import Text from "./Text";
import useUserReviews from "../hooks/useUserReviews";
import { FlatList } from "react-native";
import ReviewItem from "./OneRepository/ReviewItem";
import { ItemSeparator } from "./RepositoryList";

const UserReviews = () => {
  const { userReviws } = useUserReviews();

  const reviewsList = userReviws
    ? userReviws?.edges.map((edge) => edge.node)
    : [];

  if (!userReviws) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={reviewsList}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
    />
  );
};

export default UserReviews;
/*
<FlatList
data={reviewsList}
ItemSeparatorComponent={ItemSeparator}
renderItem={({ review }) => <ReviewItem review={review} />}
keyExtractor={({ id }) => id}
/>*/
