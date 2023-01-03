import { View } from "react-native";
import Text from "../Text";
import { StyleSheet } from "react-native";
import theme from "../../theme";
import { format } from "date-fns";

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexRow}>
        <View style={styles.border}>
          <Text
            style={{ textAlign: "center" }}
            color="primary"
            fontWeight="bold"
          >
            {review.rating}
          </Text>
        </View>
        <View style={styles.flexColumn}>
          <Text fontWeight="bold" fontSize="smallheading" color="darkGrey">
            {review.user.username}
          </Text>
          <View style={{ marginBottom: 5 }}>
            <Text color="textSecondary" fontWeight="bold">
              {format(new Date(review.createdAt), "dd.MM.yyyy")}
            </Text>
          </View>
          <Text color="textSecondary">{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    backgroundColor: theme.colors.offWhite,
    paddingVertical: 10,
  },
  flexRow: {
    flexDirection: "row",
  },
  flexColumn: {
    flexDirection: "column",
    flexGrow: 0,
    alignItems: "flex-start",
    flexShrink: 1,
  },
  border: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    justifyContent: "center",
    marginHorizontal: 10,
  },
});

export default ReviewItem;
