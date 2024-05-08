"use client";
import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";
import ButtonTwo from "./buttontwo";

export default function About() {
  return (
    <>
      <Container maxW={"100%"} bg={"black"} color={"white"}>
        <Stack as={Box} textAlign={"center"} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
          <Heading fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }} lineHeight={"110%"}>
            ABOUTME
            <br />
            <Text as={"span"} color={"blueviolet"} fontFamily={"monospace"}>
              Unveiling the Digital Frontier
            </Text>
          </Heading>
          <Text color={"gray.200"} m={{ base: 0, md: 5 }} fontSize={{ base: "md", md: "lg" }}>
            i am a software developer with a passion for crafting digital experiences. From a young age, i was captivated by the world of web development. What started as a hobby quickly turned into a career as ariska honed their skills in
            both front-end and back-end development.
            <br />
            But i didn't stop there. Embracing the rise of Web 3.0, they delved into decentralized applications and blockchain technology. Now, as a Full-Stack Web 3 Developer, i am is at the forefront of building the decentralized web of
            the future.``
          </Text>
          <Stack direction={"column"} spacing={3} align={"center"} alignSelf={"center"} position={"relative"} mt={0} w={"30%"}>
            <ButtonTwo>Gihub Repo</ButtonTwo>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
