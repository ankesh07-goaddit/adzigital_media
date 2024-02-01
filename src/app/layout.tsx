import type { Metadata } from "next";
import { Inter,Urbanist  } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavBar } from "@/components/NavBar";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });
const inter = Urbanist({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Adzigital Media",
  description:
    "Explore a wide range of services offered by Adzigital Media. From X to Y, we've got you covered.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar/>
          <main className="flex-1">
          {children}
          </main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
