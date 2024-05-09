"use client";

import { Box, Button, Flex, FormControl, FormLabel, Heading, IconButton, Input, InputGroup, chakra, Stack, Textarea, Tooltip, useClipboard, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import facebook from "../public/images/facebook.png";
import instagram from "../public/images/instagram.png";
import linkedin from "../public/images/linkedin.png";
import twitter from "../public/images/twitter.png";
import github from "../public/images/github.png";
import ButtonThree from "./button/buttonthree";

export default function Contact() {
  const MyImage = chakra(Image, {
    shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
  });
  const { hasCopied, onCopy } = useClipboard("example@example.com");

  return (
    <Flex align="center" bg={"black"} color={"white"} justify="center" id="contact" h={{ base: "100vh", md: "100%" }}>
      <Box borderRadius="lg" m={{ base: 2, md: 16, lg: 10 }} p={{ base: 2, lg: 16 }}>
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
              fontStyle={"italic"}
            >
              Get in Touch
            </Heading>

            <Stack spacing={{ base: 4, md: 8, lg: 20 }} direction={{ base: "column", md: "row" }}>
              <Stack justify="space-between" direction={{ base: "row", md: "column" }} p={{ base: 4, md: 2 }}>
                <Link target="_blank" href="https://twitter.com/ariskaadipras">
                  <Box as="button" _hover={{ transform: "scale(1.2)", transition: "0.3s" }}>
                    <MyImage alt={"Login Image"} objectFit={"cover"} src={twitter} w={{ base: "20px", md: "50px" }} />
                  </Box>
                </Link>
                <Link target="_blank" href="https://www.instagram.com/ariskaadipr/">
                  <Box as="button" _hover={{ transform: "scale(1.2)", transition: "0.3s" }}>
                    <MyImage alt={"Login Image"} objectFit={"cover"} src={instagram} w={{ base: "20px", md: "50px" }} />
                  </Box>
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/in/ariska-adi-prasetyo-25a0bb287/">
                  <Box as="button" _hover={{ transform: "scale(1.2)", transition: "0.3s" }}>
                    <MyImage alt={"Login Image"} objectFit={"cover"} src={linkedin} w={{ base: "20px", md: "50px" }} />
                  </Box>
                </Link>
                <Link target="_blank" href="https://github.com/ariskaAdi">
                  <Box as="button" _hover={{ transform: "scale(1.2)", transition: "0.3s" }}>
                    <MyImage alt={"Login Image"} objectFit={"cover"} src={github} w={{ base: "20px", md: "50px" }} />
                  </Box>
                </Link>
                <Link target="_blank" href="https://www.facebook.com/profile.php?id=100027354001640">
                  <Box as="button" _hover={{ transform: "scale(1.2)", transition: "0.3s" }}>
                    <MyImage alt={"Login Image"} objectFit={"cover"} src={facebook} w={{ base: "20px", md: "50px" }} />
                  </Box>
                </Link>
              </Stack>

              <Box bg={useColorModeValue("white", "gray.700")} borderRadius="lg" p={8} color={useColorModeValue("gray.700", "whiteAlpha.900")} shadow="base">
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>

                    <InputGroup>
                      <Input type="text" name="name" placeholder="Your Name" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup>
                      <Input type="email" name="email" placeholder="Your Email" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>

                    <Textarea name="message" placeholder="Your Message" rows={6} resize="none" />
                  </FormControl>

                  <ButtonThree>Submit</ButtonThree>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
