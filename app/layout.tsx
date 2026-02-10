import type { Metadata } from "next";
import "./globals.css";
import ConnectWalletButton from "./components/ConnectWalletButton";

export const metadata: Metadata = {
  title: "Midnight Wallet Connector",
  description: "Connect to Midnight Lace wallet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ConnectWalletButton />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}