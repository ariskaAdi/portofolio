import type { Metadata } from "next";

import "./globals.css";
import { Providers } from "./chakra";

export const metadata: Metadata = {
  title: "ariskaAdi",
  description: "portfolio-web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
