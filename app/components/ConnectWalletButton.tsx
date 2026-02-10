"use client"; // Next.js directive for client-side rendering

import { useState } from "react";
import "@midnight-ntwrk/dapp-connector-api";
import type { InitialAPI } from "@midnight-ntwrk/dapp-connector-api";

export default function ConnectWalletButton() {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const handleConnect = async () => {
    try {
      // Access the Midnight Lace wallet through the window object
      const wallet: InitialAPI = await window.midnight!.mnLace;
      
      // Connect to the specified network (use 'undeployed' for local development)
      const connectedApi = await wallet.connect('undeployed');
      
      // Retrieve the shielded addresses from the wallet
      const addresses = await connectedApi.getShieldedAddresses();
      const address = addresses.shieldedAddress;

      // Check if the connection is established
      const connectionStatus = await connectedApi.getConnectionStatus();
      
      if (connectionStatus) {
        setConnected(true);
        setWalletAddress(address);
        console.log("Connected to wallet:", address);
      }
    } catch (error) {
      console.log("Failed to connect:", error);
    }
  };

  const handleDisconnect = () => {
    setConnected(false);
    setWalletAddress(null);
  };

  return (
    <nav className="flex items-center w-full p-4">
      <div className="ml-auto flex flex-col items-end gap-2">
        {connected && walletAddress && (
          <div className="text-sm text-gray-600">
            {walletAddress.slice(0, 8)}...{walletAddress.slice(-6)}
          </div>
        )}
        <button
          type="button"
          onClick={connected ? handleDisconnect : handleConnect}
          className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors"
        >
          {connected ? "Disconnect" : "Connect Wallet"}
        </button>
      </div>
    </nav>
  );
}