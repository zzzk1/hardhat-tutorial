import { ethers, parseEther } from "ethers";

const NODE_ADDRESS: string = "http://127.0.0.1:8545/";
let provider = new ethers.JsonRpcProvider(NODE_ADDRESS);

async function main() {
    blockchain_interaction();
}

async function blockchain_interaction() {
    const blockNum: number = await provider.getBlockNumber();
    console.log(`block number: ${blockNum}`);

    const balance = await provider.getBalance("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199");
    console.log(`balance: ${balance} weis`);
    console.log(`balance: ${ethers.formatEther(balance)} eths`);

    const nextTXCost = await provider.getTransactionCount("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199");
    console.log(`next transaction will cost ${nextTXCost} eths`)

    const signer = await provider.getSigner(0);
    const tx = await signer.sendTransaction(
        {
            to: (await provider.getSigner(1)).address,
            value: parseEther("1.0")
        }
    );
    await tx.wait();

    console.log(`account0 balance remind: ${await provider.getBalance((await provider.getSigner(0)).getAddress())} ETH`);
    console.log(`account1 balance remind: ${await provider.getBalance((await provider.getSigner(1)).getAddress())} ETH`);
}

async function user_interaction() {
    const eth: bigint = ethers.parseEther("1.0");
    console.log(`eth: ${eth}`);
}

async function connect_to_ethereum() {
    const signer = await provider.getSigner(0);
    console.log(signer);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});