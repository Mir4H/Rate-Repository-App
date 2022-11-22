import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

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
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab linkedTo="/">Repositories</AppBarTab>
        <AppBarTab linkedTo="/signin">Sign In</AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;
