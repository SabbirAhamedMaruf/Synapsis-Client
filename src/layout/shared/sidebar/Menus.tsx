import { Icon, IconButton, Stack, Tooltip, VStack } from "@chakra-ui/react";
import { synapsisRoutes } from "../../menus";
import { Link } from "react-router-dom";

const Menus = () => {
  return (
    <Stack>
      <VStack id="synapsis_sidebar_menus_wrapper">
        {synapsisRoutes?.map((menu, index) => (
          <Link to={menu?.redirect_url} key={index}>
            <Tooltip label={menu?.title} placement="right" hasArrow>
              <IconButton
                aria-label={menu?.title}
                variant={"ghost"}
                borderRadius={"full"}
                icon={<Icon as={menu?.icon} fontSize={22} />}
              />
            </Tooltip>
          </Link>
        ))}
      </VStack>
    </Stack>
  );
};
export default Menus;
