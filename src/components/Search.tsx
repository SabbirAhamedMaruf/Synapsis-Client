import {
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { LuFileX2 } from "react-icons/lu";
import { debounce } from "../utils/utils";

type BaseSearchProps<T> = {
  data: T[];
  onAccept: () => void;
  preventModal?: boolean;
  placeholder?: string;
};

// When modal **is enabled** (default)
type SearchWithModalProps<T> = BaseSearchProps<T> & {
  preventModal?: false;
  title?: string;
  errorElement?: React.ReactNode | null;
};

// When modal **is disabled**
type SearchWithoutModalProps<T> = BaseSearchProps<T> & {
  preventModal: true;
  title?: never;
  errorElement?: never;
};

// Final union type
type SearchProps<T> = SearchWithModalProps<T> | SearchWithoutModalProps<T>;

const Search = <T,>({
  data = [],
  onAccept = () => {},
  errorElement = null,
  preventModal = false,
  title = "Search",
  placeholder = "Search here...",
}: SearchProps<T>) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentData, setCurrentData] = useState<T[]>([]);

  const handleSearch = debounce((data: T[], query = "") => {
    try {
      const searchResult = data.filter((value) => {
        const stringValue =
          typeof value === "string" ? value : JSON.stringify(value);
        return stringValue.toLowerCase().includes(query.toLowerCase());
      });
      setCurrentData(searchResult);
    } catch (error) {
      console.error("An error occurred while processing data", error);
    }
  }, 700);

  return (
    <Box>
      {preventModal ? (
        <InputSearch
          onChange={(value: string) => handleSearch(data, value)}
          placeholder={placeholder}
        />
      ) : (
        <Button
          onClick={onOpen}
          _hover={{ borderColor: "#BEBEBE" }}
          _active={{ borderColor: "#BEBEBE" }}
          minW={250}
          justifyContent="left"
          background="transparent"
          color="#374144"
          fontWeight="normal"
          border="1px solid #EBEBEB"
        >
          Search here ...
        </Button>
      )}

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader py={2} px={3} borderBottom="1px solid #EBEBEB">
            {title ?? "Search"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p={3}>
            <InputSearch
              onChange={(value: string) => handleSearch(data, value)}
              placeholder={placeholder}
            />
            <ErrorElement isErrorOccured={true} errorElement={errorElement} />
          </ModalBody>
          <ModalFooter py={2} px={3} borderTop="1px solid #EBEBEB">
            <Button onClick={onClose} mr={3}>
              Close
            </Button>
            <Button onClick={onAccept}>Continue</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Search;

type InputSearchProps = {
  onChange?: (e: string) => void;
  placeholder?: string;
};

const InputSearch = ({
  onChange = () => {},
  placeholder,
}: InputSearchProps) => {
  return (
    <Input
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      minW={"250px"}
      _placeholder={{
        fontSize: 14,
      }}
    />
  );
};

type ErrorElementProps = {
  errorElement?: React.ReactNode | null;
  isErrorOccured: boolean;
};

const ErrorElement = ({ errorElement, isErrorOccured }: ErrorElementProps) => {
  if (!isErrorOccured) return null;
  // Rendering custom element.
  if (errorElement) {
    return <Box>{errorElement}</Box>;
  }
  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
      textAlign={"center"}
      py={10}
      px={6}
    >
      <LuFileX2 size={100} color="#374144" opacity={0.1} />
      <Text color={"#00070B"} fontSize={20} fontWeight={"bold"}>
        No Results Found
      </Text>
      <Text
        color={"#374144"}
        fontSize={14}
        fontWeight={"normal"}
        lineHeight={"130%"}
      >
        Sorry , we couldn’t find what you’re looking for. <br /> Please try
        searching with different keywords.
      </Text>
    </Flex>
  );
};
