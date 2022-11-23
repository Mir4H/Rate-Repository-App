import { Pressable, View, StyleSheet } from "react-native";
import { Subheading } from "./Text";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";
import * as yup from 'yup';

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

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
    username: yup.string()
      .required('Username is required'),
      password: yup.string()
      .required('Password is required'),
  });

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.flexColumn}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput secureTextEntry name="password" placeholder="Password" />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Subheading>Sign In</Subheading>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
