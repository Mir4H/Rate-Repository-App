import { Link } from "react-router-native";
import { Subheading } from "../Text";

const AppBarTab = ({ linkedTo, children }) => {
  return (
    <Link to={linkedTo} style={{padding: 5, marginRight: 15}}>
      <Subheading>{children}</Subheading>
    </Link>
  );
};

export default AppBarTab;
