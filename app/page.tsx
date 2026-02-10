export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Midnight
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl">
        Connect your Lace wallet to get started with privacy-preserving
        decentralized applications on the Midnight Network.
      </p>
      <div className="bg-gray-100 p-6 rounded-lg max-w-xl">
        <p className="text-sm text-gray-700">
          Click the "Connect Wallet" button in the top right corner to authorize
          this application to access your Midnight Lace wallet.
        </p>
      </div>
    </div>
  );
}