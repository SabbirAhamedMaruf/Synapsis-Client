import {
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "../../services/api/config";
import Search from "../../components/Search";
import { IoIosList } from "react-icons/io";
import { CiGrid41 } from "react-icons/ci";
import { LuFileBox } from "react-icons/lu";
import { PiSortAscending } from "react-icons/pi";
import Menus from "../../components/Menus";
import Pagination from "../../components/Pagination";
import Models from "./Models";

type modelListPropsType = "list" | "grid";
const sortByOptions = ["Popularity", "Date Created", "Last Updated"];

const ModelsList = () => {
  const [listStyle, setListStyle] = useState<modelListPropsType>("list");
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);

  const fetchModels = async () => {
    try {
      const { data, status } = await axios.get("/api/models");
      if (status === 200 && data?.data?.length > 0) return data?.data || [];
      return [];
    } catch (error) {
      console.error("An error occured while feching models", error);
      return [];
    }
  };

  const {
    data: allModels,
    isPending: isModelFetching,
    error: isModelFetchingError,
    refetch: refetchModels,
  } = useQuery({
    queryKey: ["models"],
    queryFn: fetchModels,
  });

  console.log({
    allModels,
    isModelFetching,
    isModelFetchingError,
    refetchModels,
  });

  return (
    <Stack
      flexDirection={"column"}
      justifyContent={"space-between"}
      height={"100%"}
      background={"#FFFFFF"}
      borderRadius={6}
      p={3}
      gap={4}
    >
      <HStack justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize={24} fontWeight={"bold"}>
          All Models
        </Text>
        <HStack spacing={2}>
          <Search
            data={allModels || []}
            onAccpet={(value) => console.log(value)}
            errorElement={
              <Flex
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={2}
                textAlign={"center"}
                py={10}
                px={6}
              >
                <LuFileBox size={100} color="#374144" opacity={0.1} />
                <Text color={"#00070B"} fontSize={20} fontWeight={"bold"}>
                  No Models Found
                </Text>
                <Text
                  color={"#374144"}
                  fontSize={14}
                  fontWeight={"normal"}
                  lineHeight={"130%"}
                >
                  Sorry , we couldn’t find what you’re looking for. <br />{" "}
                  Please try searching with different keywords.
                </Text>
              </Flex>
            }
            preventModal={false}
            title="Search Models"
          />
          <IconButton
            aria-label=""
            onClick={() => setListStyle(listStyle === "list" ? "grid" : "list")}
            icon={
              <Icon
                fontSize={22}
                as={listStyle === "grid" ? IoIosList : CiGrid41}
              />
            }
          />
          <Menus
            trigger={<PiSortAscending size={20} />}
            menuItems={sortByOptions}
            onAccpet={(value) => console.log(value)}
          />
        </HStack>
      </HStack>
      <Box flex={1}>
        <Tabs onChange={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>
              <Text
                as={Flex}
                alignItems={"center"}
                fontWeight={"bold"}
                _after={{
                  content: `"${allModels?.length || 0}"`,
                  background: "#00070B",
                  color: "#fff",
                  padding: "2px 4px",
                  borderRadius: "10px",
                  fontSize: "10px",
                  fontWeight: "bold",
                  marginLeft: "4px",
                }}
              >
                All
              </Text>
            </Tab>
            <Tab>Installed</Tab>
          </TabList>
          <TabPanels>
            <TabPanel px={0} py={2} overflowY={"auto"}>
              <Models data={allModels} />
            </TabPanel>
            <TabPanel>Installed</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      {/* Footer section */}
      <HStack
        justifyContent={"space-between"}
        borderTop={"1px solid #EBEBEB"}
        pt={3}
      >
        <Text>{`Showing 1 - 10 of ${allModels?.length}`}</Text>
        <Pagination
          itemsLenght={allModels?.length}
          currentIndex={pageIndex}
          onChange={(index) => setPageIndex(index)}
        />
        <HStack>
          <Text>Items per page</Text>
          <Menus
            trigger={"10"}
            menuItems={["10", "20", "50", "100"]}
            onAccpet={(value) => console.log(value)}
          />
        </HStack>
      </HStack>
    </Stack>
  );
};
export default ModelsList;
