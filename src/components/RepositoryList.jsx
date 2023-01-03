import { FlatList, View, StyleSheet, TouchableOpacity } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import { useNavigate } from "react-router-native";

export const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, navigate }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <TouchableOpacity
          key={item.key}
          onPress={() => navigate(`/${item.id}`)}
          activeOpacity={0.5}
        >
          <RepositoryItem item={item} visible={false} />
        </TouchableOpacity>
      )}
    />
  );
};

const RepositoryList = () => {
  const navigate = useNavigate();
  const { repositories } = useRepositories();

  return (
    <RepositoryListContainer repositories={repositories} navigate={navigate} />
  );
};


const styles = StyleSheet.create({
  separator: {
    height: 5,
    width: "100%",
  },
});

export default RepositoryList;
