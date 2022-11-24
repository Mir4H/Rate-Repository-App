import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 5,
    width: "100%",
  },

});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];


  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <TouchableOpacity
          key={item.key}
          onPress={() => console.log("pressed")}
          activeOpacity={0.5}
        >
          <RepositoryItem item={item} />
        </TouchableOpacity>
      )}
      // other props
    />
  );
};

export default RepositoryList;
