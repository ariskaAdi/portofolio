import { Box, Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

export default function Services() {
  return (
    <Box m={5} borderRadius={10} bgGradient="linear(to-l, #FFCEFF, #C897EE)" h={"100%"}>
      <Stack maxW={{ sm: "100vh", md: "100%" }} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justifyContent={"space-between"} padding={{ base: 10, md: 20 }}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "1xl", md: "3xl", lg: "5xl" }} fontStyle={"italic"}>
              ONE SERVICES
              <br />
              <Text as={"span"}>AT A TIME</Text>
            </Heading>
          </Stack>
          <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 4, sm: 20 }}>
            <Text fontSize={{ base: "sm", lg: "lg" }} color={"gray.500"}>
              <Text as={"span"} fontWeight={"bold"} _hover={{ color: "gray.600" }}>
                Smart Contracts
              </Text>{" "}
              <br />
              ERC-20
              <br />
              ERC-721
              <br />
              ERC-1155
              <br />
              Custom Contracts
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              <Text as={"span"} fontWeight={"bold"} _hover={{ color: "gray.600" }}>
                DAPP
              </Text>{" "}
              <br />
              Stacking Coins
              <br />
              DEX Clone
              <br />
              NFT Marketplace
              <br />
              etc
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              <Text as={"span"} fontWeight={"bold"} _hover={{ color: "gray.600" }}>
                WEB 2.0
              </Text>{" "}
              <br />
              Fullstack
              <br />
              UI/UX Design
              <br />
              Maintenence
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );
}
