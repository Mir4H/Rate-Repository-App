import { Pressable, View } from "react-native";
import theme from "../../theme";
import { StyleSheet } from "react-native";
import ViewCounts from "./ViewCounts";
import ViewDetails from "./ViewDetails";
import Text from "../Text";
import * as Linking from "expo-linking";

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
  button: {
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 60,
  },
});

const RepositoryItem = ({ item, visible }) => {
  return (
    <View testID="repositoryItem" style={styles.flexContainer}>
      <ViewDetails item={item} />
      <View style={styles.flexRow}>
        <ViewCounts itemDetail={item.stargazersCount} itemName="Stars" />
        <ViewCounts itemDetail={item.forksCount} itemName="Forks" />
        <ViewCounts itemDetail={item.reviewCount} itemName="Reviews" />
        <ViewCounts itemDetail={item.ratingAverage} itemName="Rating" />
      </View>
      {visible ? (
        <Pressable onPress={() => Linking.openURL(item.url)}>
          <View style={styles.button}>
            <Text color="offWhite" fontWeight="bold">Open in GitHub</Text>
          </View>
        </Pressable>
      ) : null}
    </View>
  );
};

export default RepositoryItem;
