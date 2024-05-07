"use client";
import { Box } from "@chakra-ui/react";
import styles from "../src/app/page.module.css";

const ButtonOne = () => {
  return (
    <Box as="button" className={styles.buttonone}>
      Hire Me
    </Box>
  );
};

export default ButtonOne;
