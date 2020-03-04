const {getShippingCost} = require('./Parcel')

const missingLengthPackageTest = {
    length: null,
    breadth: 250,
    height: 120,
    weight: 5
}

const missingBreadthPackageTest = {
    length: 150,
    breadth: null,
    height: 120,
    weight: 5
}

const missingHeightPackageTest = {
    length: 150,
    breadth: 250,
    height: null,
    weight: 5
}

const missingWeightPackageTest = {
    length: 150,
    breadth: 250,
    height: 120,
    weight: null
}


const smallPackageTest = {
    length: 150,
    breadth: 250,
    height: 120,
    weight: 5
}

const mediumPackageTest = {
    length: 250,
    breadth: 250,
    height: 120,
    weight: 5
}

const largePackageTest = {
    length: 350,
    breadth: 250,
    height: 120,
    weight: 5
}

const extraLargePackageTest = {
    length: 450,
    breadth: 250,
    height: 120,
    weight: 5
}

const heavyPackageTest = {
    length: 150,
    breadth: 250,
    height: 120,
    weight: 25
}


test('small package', () => {
   expect(getShippingCost(smallPackageTest).name).toBe("Small")
   expect(getShippingCost(smallPackageTest).cost).toBe(5)
})

test('medium package', () => {
    expect(getShippingCost(mediumPackageTest).name).toBe("Medium")
    expect(getShippingCost(mediumPackageTest).cost).toBe(7.5)
})

test('large package', () => {
    expect(getShippingCost(largePackageTest).name).toBe("Large")
    expect(getShippingCost(largePackageTest).cost).toBe(8.5)
})

test('package too heavy', () => {
    expect(getShippingCost(heavyPackageTest).error).toBe("Too heavy!")
})

test('package too large', () => {
    expect(getShippingCost(extraLargePackageTest).error).toBe("Too large!")
})

test('no package', () => {
    expect(getShippingCost(null).error).toBe("No package provided")
})

test('missing package details', () => {
    expect(getShippingCost(missingLengthPackageTest).error).toBe("No length provided")
    expect(getShippingCost(missingBreadthPackageTest).error).toBe("No breadth provided")
    expect(getShippingCost(missingHeightPackageTest).error).toBe("No height provided")
    expect(getShippingCost(missingWeightPackageTest).error).toBe("No weight provided")
})