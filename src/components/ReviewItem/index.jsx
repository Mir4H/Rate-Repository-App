import { View, StyleSheet } from "react-native";
import Text from "../Text";
import theme from "../../theme";
import { format } from "date-fns";
import Buttons from "./Buttons";

const ReviewItem = ({ review, refetch }) => {
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
            {review.user ? review.user.username : review.repository.fullName}
          </Text>
          <View style={{ marginBottom: 5 }}>
            <Text color="textSecondary" fontWeight="bold">
              {format(new Date(review.createdAt), "dd.MM.yyyy")}
            </Text>
          </View>
          <Text color="textSecondary">{review.text}</Text>
        </View>
      </View>
      {review.repository ? <Buttons id={review.id} refetch={refetch} repo={review.repository}/> : null}
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
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 20,
  },
  buttonRow: {
    justifyContent: "space-around",
    flexDirection: "row",
  },
});

export default ReviewItem;
