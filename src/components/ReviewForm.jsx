import { Pressable, View, StyleSheet } from "react-native";
import { Subheading } from "./Text";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";
import * as yup from "yup";
import useCreateReview from "../hooks/useCreateReview";
import { useNavigate } from "react-router-native";
import { Alert } from "react-native";

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: "",
  text: "",
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .min(0, "Rating must be between 0 and 100")
    .max(100, "Rating must be between 0 and 100")
    .required("Rating is required")
    .typeError("Must be number"),
});

export const ReviewForm = () => {
    const [createReview] = useCreateReview();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const valuesToSubmit = { ...values, rating: Number(values.rating) };
    
        try {
          const result = await createReview(valuesToSubmit);
          const id = result.createReview.repositoryId
          navigate(`/${id}`);
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
              name="ownerName"
              placeholder="Repository owner name"
              autoFocus
              style={styles.basicHeight}
            />
            <FormikTextInput
              name="repositoryName"
              placeholder="Repository name"
              style={styles.basicHeight}
            />
            <FormikTextInput
              name="rating"
              keyboardType="number-pad"
              placeholder="Rating between 0 and 100"
              style={styles.basicHeight}
            />
            <FormikTextInput name="text" multiline placeholder="Review" style={{height: 120}}/>
            <Pressable style={styles.button} onPress={handleSubmit}>
              <Subheading>Create a review</Subheading>
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
    height: 60
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

export default ReviewForm;
