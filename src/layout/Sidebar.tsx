import { Box, Flex } from "@chakra-ui/react";
import BrandLogo from "./shared/sidebar/Brand";
import Menus from "./shared/sidebar/Menus";
import type { sidebarPropsTypes } from "../@types/sidebar.types";
import { useEffect, useState } from "react";

const Sidebar = ({ isCollapsed }: sidebarPropsTypes) => {
  const [showContent, setShowContent] = useState(!isCollapsed);

  // Hide content immediately when collapsing
  useEffect(() => {
    if (!isCollapsed) {
      setShowContent(false);
    }
  }, [isCollapsed]);

  return (
    <Flex h="100%" overflow="hidden">
      {/* Primary Sidebar */}
      <Flex
        id="synapsis_primary_sidebar"
        w="60px"
        flexDir="column"
        alignItems="center"
        gap={2}
        py={2}
        background="#F8F8F8"
        zIndex={2}
      >
        <BrandLogo />
        <Menus />
      </Flex>

      {/* Secondary Sidebar */}
      <Box
        id="synapsis_secondary_sidebar"
        minW={isCollapsed ? "0px" : "290px"}
        transform={isCollapsed ? "translateX(-100%)" : "translateX(0)"}
        opacity={isCollapsed ? 0 : 1}
        transition="all 0.3s ease-in-out, opacity 0.3s ease-in-out"
        borderRight={isCollapsed ? "none" : "1.5px solid #EBEBEB"}
        overflow="hidden"
        // show content only after expand animation
        onTransitionEnd={() => {
          if (!isCollapsed) setShowContent(true);
        }}
      >
        {!isCollapsed && showContent && (
          <Flex
            direction="column"
            gap={2}
            p={4}
            w="100%"
            h="100%"
            id="synapsis_dynamic_sidebar_content"
          ></Flex>
        )}
      </Box>
    </Flex>
  );
};

export default Sidebar;
