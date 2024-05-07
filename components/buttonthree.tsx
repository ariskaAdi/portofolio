"use client";
import { Box } from "@chakra-ui/react";
import styles from "../src/app/page.module.css";

const ButtonThree = (props: any) => {
  return (
    <Box as="button" className={styles.buttonthree}>
      {props.children}
    </Box>
  );
};

export default ButtonThree;
