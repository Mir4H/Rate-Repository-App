import { FlatList, View, StyleSheet, TouchableOpacity } from "react-native";
import RepositoryItem from "../RepositoryItem";
import useRepositories from "../../hooks/useRepositories";
import PickerHeader from "./PickerHeader";
import { Provider } from "react-native-paper";
import { useState } from "react";
import Search from "./Search";
import React from "react";
import { useDebounce } from "use-debounce";
import { useNavigate } from "react-router-native";

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

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { selection, setSelection, searchQuery, setSearchQuery } = this.props;

    return (
      <>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <PickerHeader
          selection={selection}
          setSelection={setSelection}
          sorting={sorting}
        />
      </>
    );
  };

  renderItem = ({ item }) => {
    const { navigate } = this.props;

    return (
      <>
        <TouchableOpacity
          key={item.key}
          onPress={() => navigate(`/${item.id}`)}
          activeOpacity={0.5}
        >
          <RepositoryItem item={item} visible={false} />
        </TouchableOpacity>
      </>
    );
  };

  render() {
    const { repositories, onEndReach, navigate } = this.props;
    const repositoryNodes = repositories
      ? repositories.edges.map((edge) => edge.node)
      : [];
    return (
      <Provider>
        <FlatList
          data={repositoryNodes}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={this.renderItem}
          ListHeaderComponent={this.renderHeader}
          onEndReached={onEndReach}
          onEndReachedThreshold={0.4}
          navigate={navigate}
        />
      </Provider>
    );
  }
}

const RepositoryList = () => {
  const [selection, setSelection] = useState(sorting.latest);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchValue] = useDebounce(searchQuery, 500);
  const variables = { ...selection, searchKeyword: searchValue };
  const { repositories, fetchMore } = useRepositories({
    ...variables,
    first: 8,
  });
  const navigate = useNavigate();

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      selection={selection}
      setSelection={setSelection}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      onEndReach={onEndReach}
      navigate={navigate}
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
