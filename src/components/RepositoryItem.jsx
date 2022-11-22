import { View } from "react-native";
import theme from "../theme";
import { StyleSheet } from "react-native";
import ViewCounts from "./ViewCounts";
import ViewDetails from "./ViewDetails";

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    backgroundColor: theme.colors.offWhite,
    paddingTop: 20,
    paddingBottom: 10,
  },
  flexRow: {
    flexDirection: "row",
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.flexContainer}>
      <ViewDetails item={item}/>
      <View style={styles.flexRow}>
        <ViewCounts itemDetail={item.stargazersCount} itemName="Stars" />
        <ViewCounts itemDetail={item.forksCount} itemName="Forks" />
        <ViewCounts itemDetail={item.reviewCount} itemName="Reviews" />
        <ViewCounts itemDetail={item.ratingAverage} itemName="Rating" />
      </View>
    </View>
  );
};

export default RepositoryItem;
