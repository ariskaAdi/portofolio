// app/providers.tsx
"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const fonts = {
  heading: "Ivar Display",
  body: "ABC Normal, sans-serif",
};

const theme = extendTheme({
  fonts,
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
