import {
  Button,
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

type ModelsProps = {
  data?: any[];
};

export type singleModelInfo = {
  name: string;
  description: string;
  provider: string;
  parameters: string[];
  tags: string[];
  pulls: string;
  updatedAt: string;
  isCloudModelAvailable: boolean;
};

const Models = ({ data = [] }) => {
  return (
    <TableContainer>
      <Table id="sabbir">
        <Thead background={"#EBEBEB"}>
          <Tr>
            <Th>Title</Th>
            <Th>Parameters</Th>
            <Th>Provider</Th>
            <Th>Pulls</Th>
            <Th>Tags</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.slice(0, 10).map((model: singleModelInfo, index) => {
            const { name, provider, parameters, pulls, tags } = model;
            const currentParameters = parameters?.map((m, idx) => (
              <Text key={idx}>{m}</Text>
            ));
            const modelTags = tags?.map((tag, idx) => (
              <Text key={idx}>{tag}</Text>
            ));
            return (
              <Tr key={index}>
                <Td>
                  <Text>{name}</Text>
                </Td>
                <Td>
                  <HStack>{currentParameters}</HStack>
                </Td>
                <Td>{provider}</Td>
                <Td>{pulls || "N/A"}</Td>
                <Td>
                  <HStack>{modelTags}</HStack>
                </Td>
                <Td>
                  <Button size={"sm"}>Install</Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Title</Th>
            <Th>Parameters</Th>
            <Th>Provider</Th>
            <Th>Pulls</Th>
            <Th>Tags</Th>
            <Th>Actions</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default Models;
