import RepositoryItem from "../RepositoryItem";
import { View } from "react-native";
import Text from "../Text";
import useRepository from "../../hooks/useRepository";
import { useParams } from "react-router-native";

const OneRepository = () => {
  const { id } = useParams();
  const { repository } = useRepository({ id });

  if (!repository) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return <RepositoryItem item={repository} visible={true} />;
};

export default OneRepository;
