import { Pressable, View, TouchableOpacity } from "react-native";
import theme from "../../theme";
import { StyleSheet } from "react-native";
import ViewCounts from "./ViewCounts";
import ViewDetails from "./ViewDetails";
import Text from "../Text";
import * as Linking from "expo-linking";
import { useNavigate } from "react-router-native";

const RepositoryItem = ({ item, visible }) => {
  const navigate = useNavigate();
  return (
    <View testID="repositoryItem" style={styles.flexContainer}>
      <TouchableOpacity
        key={item.key}
        onPress={() => navigate(`/${item.id}`)}
        activeOpacity={0.5}
      >
        <ViewDetails item={item} />
        <View style={styles.flexRow}>
          <ViewCounts itemDetail={item.stargazersCount} itemName="Stars" />
          <ViewCounts itemDetail={item.forksCount} itemName="Forks" />
          <ViewCounts itemDetail={item.reviewCount} itemName="Reviews" />
          <ViewCounts itemDetail={item.ratingAverage} itemName="Rating" />
        </View>
      </TouchableOpacity>

      {visible ? (
        <View>
          <Pressable onPress={() => Linking.openURL(item.url)}>
            <View style={styles.button}>
              <Text color="offWhite" fontWeight="bold">
                Open in GitHub
              </Text>
            </View>
          </Pressable>
          <View
            style={{
              backgroundColor: theme.colors.lightGrey,
              height: 5,
              width: "100%",
            }}
          ></View>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    backgroundColor: theme.colors.offWhite,
    paddingTop: 20,
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

export default RepositoryItem;
