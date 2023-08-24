export interface networkConfigItem {
    ethUsdPriceFeed?: string
    blockConfirmations?: number
  }
//   The square brackets around key in [key: string] indicate that key is not an actual property name, 
// but rather a placeholder to represent any possible string key that could be used to access a property in the object. 
// It's a syntax used in TypeScript to define an index signature.
// In other words, when you see [key: string]: networkConfigItem, it's saying that any string key can be used to 
// access a property in the object, and the associated value for that key should follow the structure defined by the networkConfigItem type.
  export interface networkConfigInfo {
    [key: string]: networkConfigItem
  }
  
  export const networkConfig: networkConfigInfo = {
    localhost: {},
    hardhat: {},
    // Price Feed Address, values can be obtained at https://docs.chain.link/data-feeds/price-feeds/addresses
    // Default one is ETH/USD contract on Sepolia
    sepolia: {
      ethUsdPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
      blockConfirmations: 1,
    },
  }
  
  export const INITIAL_SUPPLY = "1000000000000000000000"
  
  export const developmentChains = ["hardhat", "localhost"]