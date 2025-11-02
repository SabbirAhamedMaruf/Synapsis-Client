import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";
import { useCallback, useState } from "react";

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(
    JSON.parse(localStorage?.getItem("synapsis_collapsed_state") ?? "false") ||
      false
  );

  const onToggle = useCallback(() => {
    const currentState = !isCollapsed;
    setIsCollapsed(currentState);
    localStorage.setItem("synapsis_collapsed_state", String(currentState));
  }, [isCollapsed]);

  return (
    <Flex h={"100vh"} w={"100%"}>
      <Sidebar isCollapsed={isCollapsed} />
      <Flex flexDir={"column"} flex={1}>
        <Topbar isCollapsed={isCollapsed} onToggle={onToggle} />
        <Box flex={1} p={3} background={"#EBEBEB"}>
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};
export default Layout;
