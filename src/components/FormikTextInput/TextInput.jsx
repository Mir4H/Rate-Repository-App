import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.offWhite,
    height: 60,
    padding: 10,
    marginHorizontal: 20,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: theme.fontSizes.subheading,
  },
  borderOk: {
    borderColor: theme.colors.darkGrey,
  },
  borderRed: {
    borderColor: theme.colors.attention,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.input];
  error
    ? textInputStyle.push(styles.borderRed)
    : textInputStyle.push(styles.borderOk);
  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
