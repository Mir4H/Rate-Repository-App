import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "../RepositoryItem";
import useRepositories from "../../hooks/useRepositories";
import PickerHeader from "./PickerHeader";
import { Provider } from "react-native-paper";
import { useState } from "react";
import Search from "./Search";
import React from "react";
import { useDebounce } from 'use-debounce';

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
    const {
      selection,
      setSelection,
      searchQuery,
      setSearchQuery,
    } = this.props;

    return (
      <>
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <PickerHeader
        selection={selection}
        setSelection={setSelection}
        sorting={sorting}
      />
    </>
    );
  };

  renderItem = ({item}) => {
    return <RepositoryItem item={item} visible={false} />
  }

  render() {
    const { repositories } = this.props
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
        />
      </Provider>
    );
  }
}

const RepositoryList = () => {
  const [selection, setSelection] = useState(sorting.latest);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchValue] = useDebounce(searchQuery, 500);
  const values = {...selection, searchKeyword: searchValue}
  const { repositories } = useRepositories({values});

  return (
    <RepositoryListContainer
      repositories={repositories}
      selection={selection}
      setSelection={setSelection}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
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
