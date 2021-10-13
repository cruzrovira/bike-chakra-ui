import { Flex, Heading, Button, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import bike from "../../Sources/bike.svg";
const Home = () => {
  return (
    <Flex
      bg={`url(${bike})`}
      h="40vh"
      bgSize="contain"
      bgRepeat="no-repeat"
      bgPosition="center"
    >
      <VStack
        bg="rgb(0 0 0 /50%)"
        w="100%"
        justify="center"
        padding={{ base: "10px", md: "0" }}
      >
        <Heading
          color="white"
          textTransform="uppercase"
          letterSpacing="5px"
          textAlign="center"
        >
          Domina el Terreno
        </Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          w={{ base: "100%", md: "auto" }}
          spacing={2}
        >
          <Button
            variant="outline"
            color="white"
            _hover={{ bg: "white", color: "black" }}
            _focus={{ outline: "none" }}
            _active={{ transform: "scale(0.9)" }}
          >
            Ver detalles
          </Button>
          <Button
            variant="outline"
            color="white"
            _hover={{ bg: "white", color: "black" }}
            _focus={{ outline: "none" }}
            _active={{ transform: "scale(0.9)" }}
          >
            Ver Video
          </Button>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Home;
