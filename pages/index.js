import React from "react";
import Layout from "./components/layout";
import LinkTo from "next/link";
import { Box, Text, Link } from "@chakra-ui/core";

const color = "#d23669";
const Home = ({ posts }) => {
  return (
    <Box as="div" maxWidth="768px" width="90%" m="0 auto">
      <Layout />
      <Box as="div" mt="5rem">
        {posts !== null &&
          posts.map((post) => (
            <Box as="div">
              <Text
                fontSize={["1.5rem", "2rem", "2rem", "2rem"]}
                fontFamily="Montserrat,sans-serif"
                fontWeight="bold"
                textAlign="justify"
                color="#d23669"
                mt={["1rem", "3rem", "3rem", "3rem"]}
              >
                {post.id}.{post.title}
              </Text>
              <Text
                fontSize={["1rem", "1.3rem", "1.3rem", "1.3rem"]}
                fontFamily="Montserrat,sans-serif"
                textAlign="justify"
                mt="0"
              >
                {post.body}
              </Text>
              <LinkTo href={`/post/${post.id}`}>
                <Link color="#d23669" fontWeight="bold">
                  Read More
                </Link>
              </LinkTo>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  return {
    props: {
      posts,
    },
  };
}

export default Home;
