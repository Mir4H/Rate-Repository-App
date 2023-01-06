import { View, Pressable, StyleSheet, Alert } from "react-native";
import theme from "../../theme";
import Text from "../Text";
import useDeleteReview from "../../hooks/useDeleteReview";
import { useNavigate } from "react-router-native";

const Buttons = ({ id, repo, refetch }) => {
  const [deleteReview] = useDeleteReview();
  const navigate = useNavigate();

  const removeReview = async () => {
    await deleteReview(id);
    refetch();
  };

  const alertDelete = (name) => {
    Alert.alert("Are You Sure?", `Delete review: ${name}`, [
      {
        text: "Cancel",
        style: "cancel",
      },
      { text: "Delete", onPress: removeReview },
    ]);
  };

  return (
    <View style={styles.buttonRow}>
      <View style={styles.flexColumn}>
        <Pressable
          onPress={() => navigate(`/${repo.id}`)}
          style={{ ...styles.button, backgroundColor: theme.colors.primary }}
        >
          <Text fontWeight="bold" color="offWhite">
            View Reposatory
          </Text>
        </Pressable>
      </View>
      <View style={styles.flexColumn}>
        <Pressable
          onPress={() => alertDelete(repo.fullName)}
          style={{ ...styles.button, backgroundColor: theme.colors.attention }}
        >
          <Text fontWeight="bold" color="offWhite">
            Delete Reposatory
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 5,
  },
  buttonRow: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  flexColumn: {
    flexDirection: "column",
    alignItems: "flex-start",
    flexShrink: 1,
  },
});

export default Buttons;
