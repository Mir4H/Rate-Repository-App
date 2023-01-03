import { View } from "react-native";
import Text from "../Text";
import theme from "../../theme";
import { StyleSheet, Image } from "react-native";

const ViewDetails = ({ item }) => {
  return (
    <View style={styles.flexRow}>
      <View style={{ flexGrow: 0 }}>
        <Image style={styles.pic} source={{ uri: item.ownerAvatarUrl }} />
      </View>
      <View style={styles.flexColumn}>
        <View style={{ marginBottom: 10 }}>
          <Text color="textSecondary" fontWeight="bold">
            {item.fullName}
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text color="textSecondary">{item.description}</Text>
        </View>
        <View style={styles.highlight}>
          <Text style={{ color: theme.colors.offWhite, marginBottom: 0 }}>
            {item.language}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
  },
  flexColumn: {
    flexDirection: "column",
    flexGrow: 0,
    alignItems: "flex-start",
    flexShrink: 1,
  },
  pic: {
    width: 70,
    height: 70,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  highlight: {
    backgroundColor: theme.colors.primary,
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default ViewDetails;
