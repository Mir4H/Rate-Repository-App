import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../../theme";
import AppBarTab from "./AppBarTab";
import useUserAuth from "../../hooks/useUser";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    padding: 20,
    backgroundColor: theme.colors.bar,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

const AppBar = () => {
  const { user, signOut } = useUserAuth();
  console.log(user)

  const handleSignOut = async () => {
    try {
      console.log("clicked signout")
      await signOut();
  } catch (error) {
      console.log(error);
  }
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab linkedTo="/">Repositories</AppBarTab>
        {user ? <AppBarTab linkedTo="/signin" onPress={handleSignOut}>Sign Out</AppBarTab> : <AppBarTab linkedTo="/signin">Sign In</AppBarTab>}
      </ScrollView>
    </View>
  );
};

export default AppBar;
