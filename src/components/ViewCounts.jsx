import { View } from "react-native";
import Text from "./Text";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flexColumn: {
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexShrink: 1,
  },

});

const formatNumber = (num) => {
    return num > 999 ? (num / 1000).toFixed(1) + "K" : num;
  };

const ViewCounts = ({ itemDetail, itemName }) => {
    return (
      <View style={styles.flexColumn}>
        <Text color="textSecondary" fontWeight="bold">
          {formatNumber(itemDetail)}
        </Text>
        <Text color="textSecondary">{itemName}</Text>
      </View>
    );
  };

export default ViewCounts;