import { BigNumberish } from "@ethersproject/bignumber";

const { time } = require('openzeppelin-test-helpers');


export async function timeIncreaseTo(seconds: number) {
    // console.log((await time.latest()).toString())
    // const delay = 10 - new Date().getMilliseconds();
    // await new Promise(resolve => setTimeout(resolve, delay));
    await time.increaseTo(seconds);
    await time.advanceBlock()
    // console.log((await time.latest()).toString())
}

export async function getStartedAddn(seconds: number): Promise<number> {
    return (await time.latest()).addn(seconds)
}

export const getLatestBlock = async (): Promise<BigNumberish> => {
    const latestBlock = await time.latestBlock();
    return latestBlock;
}

export const getLatestTimestamp = async (): Promise<BigNumberish> => {
    const latestTimestamp = await time.latest();
    return latestTimestamp;
}