"use client";

import { Box, Flex, HStack, IconButton, Menu, useDisclosure, Stack, Heading } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import ButtonOne from "./button/button";
import Link from "next/link";
interface Props {
  children: React.ReactNode;
}

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box as="a" px={2} py={1} rounded={"md"} _hover={{ textDecoration: "underline" }} href={"#"}>
      {children}
    </Box>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={{ base: 4, md: 4, lg: 20 }} m={{ base: 0, md: 3, lg: 3 }}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton size={"md"} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={"Open Menu"} display={{ md: "none" }} onClick={isOpen ? onClose : onOpen} />
          <HStack spacing={8} alignItems={"center"}>
            <Box as="button" fontSize={{ base: "1xl", md: "3xl" }} fontWeight="bold">
              ariskaAdi
            </Box>
            <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }} ml={{ base: 0, md: 20 }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <Link href={"/contact"}>
                <ButtonOne />
              </Link>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }} fontWeight={"bold"}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
