import { BinanceApi } from "./binance-api";
import { BinancePriceLog } from "./binance-price-log";
import { Bitcoin } from "./bitcoin";
import { InvestorNotifier } from "./investor-notifier";
import { NewPlatform } from "./new-platform";

const bitcoin = new Bitcoin()
const binanceApi = new BinanceApi()
const binancePriceLog = new BinancePriceLog()
const investorNotifier = new InvestorNotifier()
const newPlatform = new NewPlatform()

bitcoin.addObservers(binancePriceLog)
bitcoin.addObservers(investorNotifier)
bitcoin.addObservers(newPlatform)

const newPrice = binanceApi.getLastPrice()
console.log(newPrice)

bitcoin.setPrice(newPrice)