import type { Metadata } from "next";
import { GlobalStyle } from "./globals";
import StyledComponentsRegistry from "./registry";

export const metadata: Metadata = {
  title: "Números da Sena",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {children}
          <GlobalStyle />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
