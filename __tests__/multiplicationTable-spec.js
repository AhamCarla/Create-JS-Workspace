const multiplicationTable = require("../multiplicationTable")

it ("should return false when invoke isValid given start greater than end", () => {
    // given
    const start = 3;
    const end = 1;
    // when
    const result = multiplicationTable.isValid(start, end);
    // then
    expect(result).toBe(false);
})

it ("should return false when invoke isValid given start less than 0 or end greater than 1000", () => {
    // given
    const start1 = -1;
    const end1 = 231;
    const start2 = 3;
    const end2 = 1001;
    // when
    const result1 = multiplicationTable.isValid(start1, end1);
    const result2 = multiplicationTable.isValid(start2, end2);
    // then
    expect(result1).toBe(false);
    expect(result2).toBe(false);
})

it ("should return true when invoke isValid given start less than end and start greater than 0 and end less than 1000", () => {
    // given
    const start = 2;
    const end = 4;
    // when
    const result = multiplicationTable.isValid(start, end);
    // then
    expect(result).toBe(true);
})

it ("should return null when invoke createMultiplicationTable given start greater than end", () => {
    // given
    const start = 3;
    const end = 1;
    // when
    const result = multiplicationTable.createMultiplicationTable(start, end);
    // then
    expect(result).toBe(null);
})

it ("should return multipicationTable when invoke createMultiplicationTable given start and end is valid", () => {
    // given
    const start = 2;
    const end = 4;
    // when
    const result = multiplicationTable.createMultiplicationTable(start, end);
    // then
    expect(result).toBe("2*2=4\n3*2=6\t3*3=9\n4*2=8\t4*3=12\t4*4=16\n");
})