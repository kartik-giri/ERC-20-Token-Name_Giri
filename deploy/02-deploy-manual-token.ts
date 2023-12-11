import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import verify from "../utils/verify"
import { networkConfig, developmentChains, INITIAL_SUPPLY } from "../helper-hardhat-config"

const deployToken: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  // @ts-ignore
  const { getNamedAccounts, deployments, network } = hre
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  const chainId: number = network.config.chainId!
  const tokenName = "GIRITOKEN";
  const tokenSymbol = "GIRIMANUAL";
  const ManualToken  = await deploy("ManualToken", {
    from: deployer,
    args: [INITIAL_SUPPLY,tokenName, tokenSymbol],
    log: true,
    // we need to wait if on a live network so we can verify properly
    waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
  })
  log(`ManualToken deployed at ${ManualToken.address}`)

  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    await verify(ManualToken.address, [INITIAL_SUPPLY, tokenName, tokenSymbol], "contracts/ManualToken.sol:ManualToken")
  }
}

export default deployToken
deployToken.tags = ["all", "manual"]