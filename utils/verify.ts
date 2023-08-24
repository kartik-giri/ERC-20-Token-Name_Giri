import { run } from "hardhat"

const verify = async (contractAddress: string, args: any[]) => {
  console.log("Verifying contract...")
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
      contract: "contracts/GiriToken.sol:GiriToken",
    })
  } catch (e: any) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already verified!")
    } else {
      console.log(e)
    }
  }
}

export default verify

// sepolia contract address :  0xfEefC998fc9846c04B5CC9811f42dAFB3D24a90c