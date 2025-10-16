import { Button, Flex, Icon, IconButton } from "@chakra-ui/react";
import type { topbarPropsTypes } from "../@types/topbar.types";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";

const Topbar = ({ isCollapsed, onToggle }: topbarPropsTypes) => {
  return (
    <Flex
      minH={12}
      justifyContent={"space-between"}
      alignItems={"center"}
      px={2}
      borderBottom={"1.5px solid #EBEBEB"}
    >
      <IconButton
        onClick={() => onToggle()}
        aria-label=""
        variant={"ghost"}
        borderRadius={"full"}
        icon={
          <Icon
            as={isCollapsed ? GoSidebarCollapse : GoSidebarExpand}
            fontSize={22}
          />
        }
      />
      <Button bg={"#00070B"} color={"#FFFFFF"} borderRadius={"full"}>
        New Chat
      </Button>
    </Flex>
  );
};
export default Topbar;
