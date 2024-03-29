import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";

import theme from "../theme";
import AppBar from "./AppBar";
import OneRepository from "./OneRepository";
import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";
import ReviewForm from "./ReviewForm";
import SignUpForm from "./SignUpForm";
import UserReviews from "./UserReviews";

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/signup" element={<SignUpForm />} exact />
        <Route path="/review" element={<ReviewForm />} exact />
        <Route path="/:id" element={<OneRepository />} exact />
        <Route path="/myreviews" element={<UserReviews />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.lightGrey,
  },
});

export default Main;
