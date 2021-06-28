/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let maxProfit=0
   let minPrice=Number.MAX_VALUE
   for(price of prices){
       maxProfit=Math.max(maxProfit,price-minPrice)
       minPrice=Math.min(minPrice,price)
   }
   return maxProfit
};