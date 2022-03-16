import { BigNumberish } from "ethers"

export const isValueInRange = (expected: number, value: string, error: number): boolean => {
    if(Math.abs(expected - parseInt(value)) <= expected*error) return true
    return false
}