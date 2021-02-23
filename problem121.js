/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0
    let minPrice = prices[0]
    for (let i = 0; i < prices.length; i++) {
        maxProfit = Math.max(prices[i] - minPrice, maxProfit)
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        }
    }
    return maxProfit
};

console.log(maxProfit([7,6,4,3,1]))