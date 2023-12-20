import Header from "@component/Header";
import { inter } from "@config/fonts";
import Providers from "@config/providers";
import "@style";
import type { Metadata } from "next";
import { Suspense } from "react";
import LoadingPage from "./loading";

export const metadata: Metadata = {
  title: "Dashboard | Hydroponic Monitoring",
  description: "IoT using DHT22 sensor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Header />
        <Suspense fallback={<LoadingPage />}>
          <Providers>{children}</Providers>
        </Suspense>
      </body>
    </html>
  );
}
