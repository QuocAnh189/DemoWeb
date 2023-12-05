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
  Icon,
} from "@chakra-ui/react";
// import Image from "next/image";
// import ITask from "src/style";
import { IBlog } from "src/style";
import { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";
import { EditIcon, ViewIcon } from "@chakra-ui/icons";

//react-icon
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import Link from "next/link";

//image
import imgDefault from "../../public/avatar.png";
interface CartBlogProp {
  ex: IBlog;
}
const CardItem = (props: CartBlogProp) => {
  const { ex } = props;
  return (
    <Card borderTop="8px" borderColor="purple.400" bg="white" maxW="400px">
      <CardHeader>
        <Flex gap={5}>
          <Avatar src={ex.avatar} />
          <Box>
            <Heading as="h3" size="sm">
              {ex.name}
            </Heading>
            <Text>Age: {ex.age}</Text>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody color="gray.500">
        <Image
          src={
            ex.avatar
              ? ex.avatar
              : "https://res.cloudinary.com/dfl3qnj7z/image/upload/v1699413453/z9epffilyf4of4d2skql.jpg"
          }
          alt=""
          w="full"
          h="200px"
          objectFit="contain"
        />
        <Text>Description: {ex.description}</Text>
      </CardBody>

      <Divider />

      <CardFooter>
        <HStack>
          <Button
            as={Link}
            variant="ghost"
            leftIcon={<ViewIcon />}
            href={`/${ex?._id}`}
          >
            Watch
          </Button>
          {ex.dislike ? (
            <Icon as={AiOutlineDislike} bgSize="xl" />
          ) : (
            <Icon as={AiOutlineLike} />
          )}
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default CardItem;
