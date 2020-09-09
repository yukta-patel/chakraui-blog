import React from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout";

import { Box, Text } from "@chakra-ui/core";

const Post = ({ posts }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Box as="div" maxWidth="768px" width="90%" margin="0 auto">
      <Layout />
      {posts !== null && (
        <Box as="div">
          <Text
            fontSize={["1.5rem", "2rem", "2rem", "2rem"]}
            fontFamily="Montserrat,sans-serif"
            fontWeight="bold"
            textAlign="justify"
            color="#d23669"
            m="0"
            mt="3rem"
          >
            {posts.id}.{posts.title}
          </Text>
          <Text
            fontSize={["1rem", "1.3rem", "1.3rem", "1.3rem"]}
            fontFamily="Montserrat,sans-serif"
            textAlign="justify"
            mt="0"
          >
            {posts.body}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export async function getServerSideProps(ctx) {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${ctx.query.id}`
  );
  const posts = await data.json();

  return {
    props: {
      posts,
    },
  };
}

export default Post;
