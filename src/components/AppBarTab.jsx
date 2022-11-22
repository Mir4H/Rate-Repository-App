import { Pressable } from "react-native";
import { Subheading } from "./Text";

const AppBarTab = ({ onPress, children }) => {
  return (
    <Pressable onPress={onPress}>
      <Subheading>{children}</Subheading>
    </Pressable>
  );
};

export default AppBarTab;
