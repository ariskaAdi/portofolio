"use client";
import { Box } from "@chakra-ui/react";
import styles from "./button.module.css";

const ButtonOne = () => {
  return (
    <Box as="button" className={styles.buttonone}>
      Contact Me
    </Box>
  );
};

export default ButtonOne;
