"use client";
import { Box } from "@chakra-ui/react";
import styles from "../src/app/page.module.css";

const ButtonTwo = (props: any) => {
  return (
    <Box as="button" className={styles.buttontwo} w={{ base: "100%", md: "40%" }}>
      {props.children}
    </Box>
  );
};

export default ButtonTwo;
