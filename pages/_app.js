import '../styles/globals.css'
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import NavBar from './components/navbar';


const { chains, provider } = configureChains(
  [
    chain.mainnet,
    chain.polygon,
    chain.optimism,
    chain.arbitrum,
    chain.polygonMumbai,
  ],
  [
    alchemyProvider({ alchemyId: "ZL37j68dKJV9-UFjEk0Bj52EeetaFcfK" }),
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "Iris",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});


function MyApp({ Component, pageProps }) {
  return (
  <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme({
          accentColorForeground: "white",
          borderRadius: "small",
          fontStack: "system",
        })}
      >
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>)
}

export default MyApp
