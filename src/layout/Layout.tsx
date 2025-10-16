import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";
import { useCallback, useState } from "react";

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onToggle = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  return (
    <Flex h={"100vh"} w={"100%"}>
      <Sidebar isCollapsed={isCollapsed} />
      <Flex flexDir={"column"} flex={1}>
        <Topbar isCollapsed={isCollapsed} onToggle={onToggle} />
        <Box flex={1}>
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};
export default Layout;
