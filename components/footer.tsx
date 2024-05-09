"use client";

import { Box, Container, SimpleGrid, Stack, Text, chakra } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import facebook from "../public/images/facebook.png";
import instagram from "../public/images/instagram.png";
import linkedin from "../public/images/linkedin.png";
import twitter from "../public/images/twitter.png";
import github from "../public/images/github.png";

export default function Footer() {
  const MyImage = chakra(Image, {
    shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
  });
  return (
    <Box bg={"black"} color={"white"} roundedTop={50}>
      <Container as={Stack} maxW={{ sm: "100vh", md: "100%" }} py={10}>
        <SimpleGrid templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }} spacing={8}>
          <Stack spacing={6}>
            <Box></Box>
            <Text fontSize={"sm"}>© 2024 ariskaAdi Portofolio. All rights reserved</Text>
            <Stack direction={"row"} spacing={6}></Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Contact us</Link>
            <Link href={"#"}>Pricing</Link>
            <Link href={"#"}>Testimonials</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Legal</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Satus</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Stack direction={"row"}>
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
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
