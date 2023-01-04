import { FlatList, View, StyleSheet, TouchableOpacity } from "react-native";
import RepositoryItem from "../RepositoryItem";
import useRepositories from "../../hooks/useRepositories";
import { useNavigate } from "react-router-native";
import PickerHeader from "./PickerHeader";
import { Provider } from "react-native-paper";
import { useState } from "react";

export const ItemSeparator = () => <View style={styles.separator} />;

const sorting = {
  latest: {
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
    name: "Lastest Repositories",
  },
  highest: {
    orderBy: "RATING_AVERAGE",
    orderDirection: "DESC",
    name: "Highest Rated Repositories",
  },
  lowest: {
    orderBy: "RATING_AVERAGE",
    orderDirection: "ASC",
    name: "Lowest Rated Repositories",
  },
};

export const RepositoryListContainer = ({
  repositories,
  navigate,
  selection,
  setSelection,
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <Provider>
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
        ListHeaderComponent={() => (
          <PickerHeader
            selection={selection}
            setSelection={setSelection}
            sorting={sorting}
          />
        )}
      />
    </Provider>
  );
};

const RepositoryList = () => {
  const [selection, setSelection] = useState(sorting.latest);
  const navigate = useNavigate();
  const { repositories } = useRepositories({ selection });

  return (
    <RepositoryListContainer
      repositories={repositories}
      navigate={navigate}
      selection={selection}
      setSelection={setSelection}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 5,
    width: "100%",
  },
});

export default RepositoryList;
