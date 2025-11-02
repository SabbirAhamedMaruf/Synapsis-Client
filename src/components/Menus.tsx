import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import type React from "react";

type MenusProps = {
  trigger: string | React.ReactNode | undefined;
  menuItems: string[];
  onAccpet: (item: string) => void;
};

const Menus = ({
  trigger = "",
  menuItems = [],
  onAccpet = () => {},
}: MenusProps) => {
  const isTriggerString = typeof trigger === "string";

  return (
    <Menu>
      <MenuButton
        as={isTriggerString ? Button : IconButton}
        {...(!isTriggerString && { icon: trigger as React.ReactElement })}
        fontSize={14}
        borderRadius={6}
      >
        {isTriggerString ? trigger : undefined}
      </MenuButton>
      <MenuList>
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={() => onAccpet(item)}>
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Menus;
