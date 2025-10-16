import { Flex } from "@chakra-ui/react";
import { LuBrainCircuit } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
const BrandLogo = () => {
  const navigate = useNavigate();
  return (
    <Flex
      onClick={() => navigate("/")}
      boxSize={10}
      background={"#00070B"}
      color={"#FFFFFF"}
      alignItems={"center"}
      justifyContent={"center"}
      borderRadius={5}
      cursor={"pointer"}
    >
      <LuBrainCircuit fontSize={24} />
    </Flex>
  );
};
export default BrandLogo;
