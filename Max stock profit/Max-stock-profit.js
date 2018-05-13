function maxStockProfit(stockPrices) {
    var maxProfit = -1;
    var buyPrice = 0;
    var sellPrice = 0;
    var changeBuyPrice = true;
    for (var i = 0; i < stockPrices.length; i++) {
        if (changeBuyPrice) buyPrice = stockPrices[i];
        sellPrice = stockPrices[i + 1];
        if (sellPrice < buyPrice) {
            changeBuyPrice = true;
        }
        else {
            var Profit = sellPrice - buyPrice;
            if (Profit > maxProfit) maxProfit = Profit;
            changeBuyPrice = false;
        }
    }
    return maxProfit;
}
console.log(maxStockProfit([10,18,4,5,9,6,16,12]));