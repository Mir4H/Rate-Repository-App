import { Link } from "react-router-native";
import { Subheading } from "../Text";

const AppBarTab = ({ linkedTo, children, onPress }) => {
  return (
    <Link to={linkedTo} onPress={onPress} style={{padding: 5, marginRight: 15}}>
      <Subheading>{children}</Subheading>
    </Link>
  );
};

export default AppBarTab;
