import { Box, Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

export default function Services() {
  return (
    <Box m={5} borderRadius={10} bgGradient="linear(to-l, #FFCEFF, #C897EE)" h={"100%"}>
      <Stack maxW={{ sm: "100vh", md: "100%" }} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justifyContent={"space-between"} padding={{ base: 10, md: 20 }}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "1xl", md: "3xl", lg: "5xl" }} fontStyle={"italic"}>
              PERKS TO WORK
              <br />
              <Text as={"span"}>WITH ME</Text>
            </Heading>
          </Stack>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Create Project
            </Button>
            <Button rounded={"full"}>How It Works</Button>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );
}
