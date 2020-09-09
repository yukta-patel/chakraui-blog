import React from "react";
import { Heading, Box, Flex, Button, Image, Text } from "@chakra-ui/core";
import Link from "next/link";

const Layout = () => {
  return (
    <>
      <Flex as="div" justifyContent="space-between">
        <Heading
          as="h1"
          fontWeight="bold"
          fontSize={["2.3rem", "3rem", "3rem", "3rem"]}
          fontFamily="Montserrat, sans-serif"
          m="0"
          mt={["0.5rem", "0", "0", "0"]}
        >
          Overreacted
        </Heading>
        <Link href="/">
          <Button
            backgroundColor="#d23669"
            color="white"
            fontSize="1rem"
            p={["0.1rem 0.7rem", "0.2rem 1rem", "0.2rem 1rem", "0.2rem 1rem"]}
            mt="0.7rem"
            fontWeight="none"
          >
            Home
          </Button>
        </Link>
      </Flex>
      <Flex as="div" mt="3rem" flexDirection="row">
        <Image
          src="https://images.pexels.com/photos/1804796/pexels-photo-1804796.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          height="70px"
          width="70px"
          borderRadius="50%"
        ></Image>
        <Box
          as="div"
          pl="0.8rem"
          fontSize={["0.9rem", "1.1rem", "1.1rem", "1.1rem"]}
          fontFamily="Merriweather,serif"
          mt={["1rem", "0.5rem", "0.5rem", "0.5rem"]}
        >
          <Text>Personal blog by Dan Abramov.</Text>
          <Text>I explain with words and code.</Text>
        </Box>
      </Flex>
    </>
  );
};

export default Layout;
