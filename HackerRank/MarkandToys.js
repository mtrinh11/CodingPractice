function maximumToys(prices, k) {
    //would I have to implement my own sorting algo here?
    //this sort is the fastest 
    let sortedPrices = prices.sort((a, b) => {
        if (a < b) {
            return -1
        } else if( a > b) {
            return 1
        }
        return 0
    })
    let count = 0
    let cost = 0;
    
    while (cost <= k) {
        cost += sortedPrices[count]
        count++
    }
    
    return count - 1
}