import { Pressable, View, StyleSheet, Alert } from "react-native";
import { Subheading } from "./Text";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <View style={styles.flexColumn}>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput
              secureTextEntry
              name="password"
              placeholder="Password"
            />
            <Pressable
              testID="button"
              style={styles.button}
              onPress={handleSubmit}
            >
              <Subheading>Sign In</Subheading>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      navigate("../");
    } catch (error) {
      Alert.alert("Something went wrong!", `${error}`);
      console.log(error);
    }
  };

  return <SignInForm onSubmit={onSubmit} />;
};

const styles = StyleSheet.create({
  flexColumn: {
    flexDirection: "column",
    alignItems: "stretch",
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    margin: 20,
    alignItems: "center",
  },
});

export default SignIn;
