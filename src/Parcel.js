const getShippingCost = (parcel) => {

if (parcel === null)  {
   const noPackage = {
       error: "No package provided"
   }
   return noPackage
}

if (parcel.length === null) {
    const noLength = {
        error: "No length provided"
    }
    return noLength
}

if (parcel.breadth === null) {
    const noBreadth = {
        error: "No breadth provided"
    }
    return noBreadth
}

if (parcel.height === null) {
    const noHeight = {
        error: "No height provided"
    }
    return noHeight
}

if (parcel.weight === null) {
    const noWeight = {
        error: "No weight provided"
    }
    return noWeight
}

    
if (parcel.weight >= 25) {

 const heavyPackage = {
    error: "Too heavy!"
    }
    return heavyPackage
}

if (parcel.length <= 200 &&
    parcel.breadth <= 300 &&
    parcel.height <= 150) {

    const smallPackage = {
        name: "Small",
        cost: 5
    }
    return smallPackage
}

if (parcel.length <= 300 &&
    parcel.breadth <= 400 &&
    parcel.height <= 200) {

    const mediumPackage = {
        name: "Medium",
        cost: 7.5
    }
    return mediumPackage
}

if (parcel.length <= 400 &&
    parcel.breadth <= 600 &&
    parcel.height <= 250) {

    const largePackage = {
        name: "Large",
        cost: 8.5
    }
    return largePackage
} else  {
    const tooLarge = {
        error: "Too large!"
    }
    return tooLarge
}
}

module.exports = getShippingCost
