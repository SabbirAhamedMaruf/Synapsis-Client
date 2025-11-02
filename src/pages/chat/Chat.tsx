import {
  Box,
  Flex,
  Icon,
  IconButton,
  Text,
  Textarea,
  Tooltip,
} from "@chakra-ui/react";
import { GoPackage } from "react-icons/go";
import { MdSync } from "react-icons/md";
import { spin360 } from "../../assets/animation";

const Chat = () => {
  // const {
  //   isOpen: isModelChangerOpen,
  //   onOpen: onModelChangerOpen,
  //   onClose: onModelChangerClose,
  // } = useDisclosure();
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      h={"100%"}
    >
      <Box textAlign={"center"}>
        <Text color={"#00070B"} fontSize={28} fontWeight={600}>
          Welcome Back Sabbir Ahamed Maruf
        </Text>
        <Text color={"#374144"} fontSize={14}>
          I’m here to assist you with your project or questions. What would you
          like to start with?
        </Text>
      </Box>
      <Box w={"4xl"} id="synapsis_chat_area" mt={6} mb={2}>
        <Flex alignItems={"center"} gap={1} mb={2}>
          <GoPackage />
          <Text
            color={"#00070B"}
            fontSize={13}
            fontWeight={400}
            lineHeight={"150%"}
          >
            ChatGPT 4.1
          </Text>
          <Tooltip
            // isDisabled={isModelChangerOpen}
            label="Change model"
            placement="right"
            hasArrow
            openDelay={1000}
            zIndex={9999}
          >
            <IconButton
              // onClick={() => onModelChangerOpen()}
              _hover={{
                animation: `${spin360} 0.6s linear`,
              }}
              variant={"ghost"}
              size={"xs"}
              aria-label="switch_models"
              borderRadius={"full"}
              transition={"transfrom 0.3s linear"}
              icon={<Icon as={MdSync} fontSize={16} />}
            />
          </Tooltip>
        </Flex>
        <Textarea placeholder="Ask Anything. For Commands /" size="sm" />
      </Box>
    </Flex>
  );
};
export default Chat;
