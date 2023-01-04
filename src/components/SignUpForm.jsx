import { Pressable, View, StyleSheet } from "react-native";
import { Subheading } from "./Text";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";
import * as yup from "yup";
import useSignUp from "../hooks/useSignUp";
import { useNavigate } from "react-router-native";
import { Alert } from "react-native";
import useSignIn from "../hooks/useSignIn";

const initialValues = {
  username: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Repository owner name is required")
    .min(1, "Username min length is 1 characters")
    .max(30, "Username max length is 30 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password min length is 5 characters")
    .max(50, "Password max length is 50 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords don't match")
    .required("Password confirm is required"),
});

export const SignUpForm = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password, confirmPassword } = values;

    try {
      if (password === confirmPassword) {
        await signUp({ username, password });
        await signIn({ username, password });
        navigate("/");
      }
    } catch (error) {
      Alert.alert("Something went wrong!", `${error}`);
      console.log(error);
    }
  };

  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <View style={styles.flexColumn}>
            <FormikTextInput
              name="username"
              placeholder="Username (Length 1-30 characters)"
              autoFocus
              style={styles.basicHeight}
            />
            <FormikTextInput
              secureTextEntry
              name="password"
              placeholder="Password (Length 5-50 characters)"
              style={styles.basicHeight}
            />
            <FormikTextInput
              secureTextEntry
              name="confirmPassword"
              placeholder="Password Confirm"
              style={styles.basicHeight}
            />
            <Pressable style={styles.button} onPress={handleSubmit}>
              <Subheading>Sign up</Subheading>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  flexColumn: {
    flexDirection: "column",
    alignItems: "stretch",
  },
  basicHeight: {
    height: 60,
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

export default SignUpForm;
