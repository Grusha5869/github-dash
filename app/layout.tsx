import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components";
import { robotoVar } from "./font"

export const metadata: Metadata = {
  title: "GitHub Dashboard",
  description: "Аналитика профиля GitHub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${robotoVar.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}