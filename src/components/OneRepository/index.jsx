import RepositoryItem from "../RepositoryItem";
import { View, FlatList } from "react-native";
import Text from "../Text";
import useRepository from "../../hooks/useRepository";
import { useParams } from "react-router-native";
import ReviewItem from "./ReviewItem";
import { ItemSeparator } from "../RepositoryList";

const OneRepository = () => {
  const { id } = useParams();
  const { repository, fetchMore } = useRepository({ first: 7, repositoryId: id });
  const reviewsList = repository
  ? repository?.reviews.edges.map((edge) => edge.node)
  : [];

  const onEndReach = () => {
    fetchMore();
  };

  if (!repository) {
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
      ListHeaderComponent={() => <RepositoryItem item={repository} visible={true} />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.3}
    />
  );
};

export default OneRepository;