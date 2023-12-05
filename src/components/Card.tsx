import {
  Container,
  Box,
  SimpleGrid,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  HStack,
  Button,
  Divider,
  Avatar,
} from "@chakra-ui/react";
// import Image from "next/image";
// import ITask from "src/style";
import { IBlog } from "src/style";
import { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";
import { EditIcon, ViewIcon } from "@chakra-ui/icons";

interface CartBlogProp {
  ex: IBlog;
}
const CardItem = (props: CartBlogProp) => {
  const { ex } = props;
  return (
    <Card borderTop="8px" borderColor="purple.400" bg="white">
      <CardHeader>
        <Flex gap={5}>
          {/* <Avatar src={task.img}/> */}
          <Avatar src={ex.avatar} />
          <Box>
            <Heading as="h3" size="sm">
              {/* {task.title} */}
              Anh Quốc
            </Heading>
            {/* <Text>by {task.author}</Text> */}
            <Text>by Vương Duy</Text>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody color="gray.500">
        <Image src={ex.avatar} alt="" />
        {/* <Text>{task.description}</Text> */}
        <Text>Hello everyone today i feel so good</Text>
      </CardBody>

      <Divider />

      <CardFooter>
        <HStack>
          <Button variant="ghost" leftIcon={<ViewIcon />}>
            Watch
          </Button>
          <Button variant="ghost" leftIcon={<EditIcon />}>
            Comment
          </Button>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default CardItem;
