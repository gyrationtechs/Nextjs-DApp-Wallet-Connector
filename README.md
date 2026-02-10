# DApp Wallet Connector

A Next.js application demonstrating wallet connectivity with Midnight Lace using the DApp Connector API. This project provides a foundation for building privacy-preserving decentralized applications on the Midnight Network.

## Features

- Wallet connection/disconnection functionality
- Display wallet shielded addresses
- Connection status management
- Next.js 15 with TypeScript and App Router
- Integration with [@midnight-ntwrk/dapp-connector-api](https://www.npmjs.com/package/@midnight-ntwrk/dapp-connector-api) v4.0.0

## Prerequisites

Before you begin, ensure you have:

- **Node.js** (v18 or higher)
- **npm**, **yarn**, **pnpm**, or **bun** package manager
- **[Midnight Lace Wallet Chrome Extension](https://chromewebstore.google.com/detail/lace-midnight-preview/hgeekaiplokcnmakghbdfbgnlfheichg)** - **REQUIRED**: This extension must be installed in Chrome before running the application.

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd dapp-wallet-connector
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## Running the Application

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Using the Wallet Connector

1. Click the **"Connect Wallet"** button in the top right corner
2. The Midnight Lace wallet extension will prompt you to authorize the connection
3. Choose your authorization preference:
   - **Always**: Stay authorized after closing the browser
   - **Only once**: Reauthorize on your next visit
4. After approval, the button will display **"Disconnect"** and show your truncated wallet address

### Verifying the Connection

To verify your wallet connection:
1. Open the Midnight Lace wallet extension
2. Click on your wallet name (top right)
3. Navigate to **Settings » Authorized DApps**
4. You should see `http://localhost:3000` listed as an authorized application

You can revoke access at any time by clicking the trash icon next to the application.

## Project Structure

```
app/
├── components/
│   └── ConnectWalletButton.tsx  # Client-side wallet connection component
├── layout.tsx                    # Root layout with persistent navigation
└── page.tsx                      # Welcome page
```

## Resources

- [DApp Connector API Documentation](https://docs.midnight.network/api-reference/dapp-connector)
- [Next.js Documentation](https://nextjs.org/docs)
- [Midnight Lace Wallet](https://chromewebstore.google.com/detail/lace-midnight-preview/hgeekaiplokcnmakghbdfbgnlfheichg)
- [Midnight Network](https://midnight.network)
