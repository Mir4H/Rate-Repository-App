import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../../theme";
import AppBarTab from "./AppBarTab";
import useUserAuth from "../../hooks/useUser";

const AppBar = () => {
  const { user, signOut } = useUserAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab linkedTo="/">Repositories</AppBarTab>
        {user ? (
          <>
          <AppBarTab linkedTo="/review">Create a review</AppBarTab>
          <AppBarTab linkedTo="/myreviews">My reviews</AppBarTab>
          <AppBarTab linkedTo="/signin" onPress={handleSignOut}>
            Sign Out
          </AppBarTab>
          </>
        ) : (
          <>
          <AppBarTab linkedTo="/signin">Sign In</AppBarTab>
          <AppBarTab linkedTo="/signup">Sign up</AppBarTab>
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    padding: 10,
    backgroundColor: theme.colors.bar,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default AppBar;
