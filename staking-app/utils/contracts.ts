import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = "0xfE4DD701Bc817183936d23c3956920Edf046E7c0";
const rewardTokenContractAddress = "0xfe9CF3Ab19fb790b8256c8036ABa577b83Cc61a9";
const stakingContractAddress = "0x26b533Db3df72cdae65a013D3dE64F8Bdf4b76cc";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingABI
});