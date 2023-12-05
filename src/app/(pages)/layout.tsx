import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "../";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import { Providers } from "../provider";
  
import Navbar from "src/components/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "src/components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
            <GridItem
              as="aside"
              colSpan={{ base: 6, lg: 2, xl: 1 }}
              bg="purple.400"
              minHeight={{ lg: "100vh" }}
              p={{ base: "20px", lg: "30px" }}
            >
              <Sidebar/>
            </GridItem>
            <GridItem as="main" colSpan={{ base: 6, lg: 4 , xl: 5 }} p="40px">
              <Navbar />
              {children}
            </GridItem>
          </Grid>
        </Providers>
      </body>
    </html>
  );
}
