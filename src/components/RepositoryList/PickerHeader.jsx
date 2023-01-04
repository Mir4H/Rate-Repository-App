import { View } from "react-native";
import { useState } from "react";
import { Button, Menu, Divider } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import theme from "../../theme";

const PickerHeader = ({ selection, setSelection, sorting }) => {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const makeSelection = (value) => {
    setSelection(value);
    closeMenu();
  };

  return (
    <View
      style={{
        paddingVertical: 5,
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
    >
      <Menu
        style={{
          marginTop: -40,
        }}
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button textColor={theme.colors.textPrimary} onPress={openMenu}>
            {selection.name} <AntDesign name="down" size={14} color="black" />
          </Button>
        }
      >
        <Menu.Item
          onPress={() => {
            makeSelection(sorting.latest);
          }}
          title={"Lastest Repositories"}
        />
        <Divider />
        <Menu.Item
          onPress={() => {
            makeSelection(sorting.highest);
          }}
          title="Highest Rated Repositories"
        />
        <Divider />
        <Menu.Item
          onPress={() => {
            makeSelection(sorting.lowest);
          }}
          title="Lowest Rated Repositories"
        />
      </Menu>
    </View>
  );
};

export default PickerHeader;
