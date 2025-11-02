import { Flex, HStack, Icon, IconButton } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type PaginationProps = {
  itemsLenght: number;
  currentIndex: number;
  onChange: (index: number) => void;
};

const Pagination = ({
  itemsLenght = 0,
  currentIndex = 0,
  onChange = () => {},
}: PaginationProps) => {
  if (itemsLenght === 0) return null;
  const handlePaginationIndex = (index: number) => {
    console.log(index);
    onChange(index);
  };
  return (
    <HStack>
      <IconButton
        onClick={() => handlePaginationIndex(currentIndex - 1)}
        size={"sm"}
        variant={"ghost"}
        borderRadius={"full"}
        aria-label=""
        icon={<Icon as={IoIosArrowBack} fontSize={18} />}
      />
      <Flex></Flex>
      <IconButton
        onClick={() => handlePaginationIndex(currentIndex + 1)}
        size={"sm"}
        variant={"ghost"}
        borderRadius={"full"}
        aria-label=""
        icon={<Icon as={IoIosArrowForward} fontSize={18} />}
      />
    </HStack>
  );
};
export default Pagination;
