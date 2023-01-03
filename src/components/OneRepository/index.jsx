import RepositoryItem from "../RepositoryItem";
import { View, FlatList } from "react-native";
import Text from "../Text";
import useRepository from "../../hooks/useRepository";
import { useParams } from "react-router-native";
import ReviewItem from "./ReviewItem";
import { ItemSeparator } from "../RepositoryList";


const OneRepository = () => {
  const { id } = useParams();
  const { repository } = useRepository({ id });
  const reviews = repository
  ? repository.reviews.edges.map((edge) => edge.node)
  : [];
  console.log(reviews)

  if (!repository) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItem item={repository} visible={true} />}
    />
  );
};

export default OneRepository;