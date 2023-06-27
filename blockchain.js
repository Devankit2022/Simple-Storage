// BEACUSE I AM USING GANACHE IN COMMAND LINE

const ethers = require("ethers")
const fs = require("fs-extra")
require("dotenv").config()

async function main() {
    const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL)
    const encryptedJson = fs.readFileSync("./.encryptedKey.json", "utf8")
    let wallet = new ethers.Wallet.fromEncryptedJsonSync(
        encryptedJson,
        process.env.PRIVATE_KEY_PASSWORD
    )
    wallet = await wallet.connect(provider)

    // const balance = await wallet.getBalance();
    // const balanceInEth = ethers.utils.formatEther(balance);
    // console.log(balanceInEth);

    // const nonce = await wallet.getTransactionCount();
    // console.log(nonce);

    // const gasPrice = await provider.getGasPrice();
    // const gasPriceInWei = ethers.utils.formatUnits(gasPrice, 'wei');
    // console.log(gasPriceInWei);

    const transactionRecipt = await provider.getTransactionReceipt(
        "0x514e6c011c1a03f64b3ec72a7042e107f6d0ad70da82da0fd38515008f1cd5af"
    )
    console.log(transactionRecipt)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
