export {};
function getUniqueValues (A: number[], B: number[]): number[] {
    const dict = B.reduce((acc, b) => {
        acc[b] = b;
        return acc
    }, {} as Record<number, number>)

    return A.filter((val) => !dict[val]);
}

function getCommonValues (A: number[], B: number[]): number[] {
    const ASet = new Set(A)
    const BSet = new Set(B)

    return [...ASet].filter((val) => BSet.has(val))
}
