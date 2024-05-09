"use client";

import { Flex, Heading, Stack, Text, chakra, useBreakpointValue } from "@chakra-ui/react";
import ButtonTwo from "./button/buttontwo";
import ButtonThree from "./button/buttonthree";
import me from "../public/images/me.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const MyImage = chakra(Image, {
    shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
  });
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }} px={{ base: 0, md: 8 }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "",
                zIndex: -1,
              }}
            >
              Hi there
            </Text>
            <br /> <Text as={"span"}>Design Projects</Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            The project board is an exclusive resource for contract work. It&apos;s perfect for freelancers, agencies, and moonlighters.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <ButtonTwo>Download CV</ButtonTwo>
            <Link href="/projects">
              <ButtonThree>View Projects</ButtonThree>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} pr={{ base: 0, md: 10 }}>
        <MyImage alt={"Login Image"} objectFit={"cover"} src={me} />
      </Flex>
    </Stack>
  );
}
