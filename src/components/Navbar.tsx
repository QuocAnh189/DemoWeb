"use client";

import { UnlockIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Heading,
  Button,
  Text,
  Spacer,
  HStack,
  useToast,
  Avatar,
  AvatarBadge,
  Container,
} from "@chakra-ui/react";

//redux
import { useAppSelector } from "src/redux/hooks";



const Navbar = () => {
  const toast = useToast();

  const title = useAppSelector((state) => state.title.title);

  const showToast = () => {
    toast({
      title: "Logged out",
      description: "Successfully logged out",
      duration: 5000,
      isClosable: true,
      status: "success",
      position: "top",
      icon: <UnlockIcon />,
    });
  };

  return (
    <Flex as="nav" p="10px" alignItems="center" gap="10px" mb="40px">
      <Heading as="h1">{title}</Heading>
      <Spacer />
      <HStack spacing="20px" wrap="wrap">
        <Avatar src="https://res.cloudinary.com/dadvtny30/image/upload/v1701680700/68a335b119a2ddc35160e01747569da5nrhyh_xq7999.png">
          <AvatarBadge width="1.3em" bg="teal.500">
            <Text fontSize="xs" color="white">
              3
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text>anhquoc18092003@gmail.com</Text>
        <Button
          bg="purple.400"
          color="white"
          onClick={showToast}
          _hover={{ bg: "purple.500" }}
        >
          Logout
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
