# Fetch financial data

---

## Motivation
Following the X mining logic, we also need financial data to start analysing whatever is that you want to analyse in our economy.<br />
This will get BACEN's indicators and brazilian stock market data.


## How does it work
FOr the stock data we'll use yahoo-finance2 dependency wich allow us to get historical data going stock by stock.<br />
For BACEN's data we'll use it's own API.

### BACEN's API
About BACEN's API we need to see it's metadata to understand what we'll bring back from it.<br />
This metadata follows specific codes for each indicator avaiable, here they are with their Codes:<br /><br />

- Interest Rates<br />

  - 4189 - SELIC Rate: The basic interest rate of the Brazilian economy, used for monetary policy.<br />
  - 4188 - Overnight Interbank Deposit Rate: The effective daily rate for interbank overnight deposits.<br />
  - 1178 - CDI: Interbank Certificate of Deposit rate, commonly used as a reference in investments.<br />

- Inflation Indices<br />

  - 433 - IPCA: The National Consumer Price Index, the official inflation indicator in Brazil.<br />
  - 188 - INPC: National Consumer Price Index for lower-income families.<br />
  - 189 - IGP-M: General Market Price Index, widely used for rent adjustments.<br />

- Exchange Rates<br />

  - 3695 - USD/BRL Exchange Rate: The exchange rate for the US dollar against the Brazilian real.<br />
  - 21620 - EUR/BRL Exchange Rate: The exchange rate for the Euro against the Brazilian real.<br />
  - 13621 - Currency Basket: Weighted average exchange rate of a currency basket.<br />

- Monetary Aggregates<br />

  - 27831 - M1: Money supply consisting of currency in circulation and demand deposits.<br />
  - 27832 - M2: Includes M1 plus savings accounts and term deposits.<br />
  - 27833 - M3: M2 plus marketable securities issued by financial institutions.<br />

- Public Finances<br />

  - 13762 - Public Debt/GDP Ratio: Government debt as a percentage of GDP.<br />
  - 14212 - Primary Budget Surplus: Government savings before interest payments.<br />
  - 14029 - Nominal Deficit: Budget deficit including interest payments.<br />

- Foreign Sector<br />

  - 22662 - Trade Balance: Exports minus imports for Brazil.<br />
  - 22663 - Current Account Balance: Includes trade balance, net income, and transfer payments.<br />
  - 22664 - Foreign Direct Investment: Investments made by foreign entities in Brazil.<br />

- Economic Activity<br />

  - 24363 - IBC-Br Index: A monthly proxy for GDP, reflecting economic activity.<br />
  - 24364 - Unemployment Rate: Percentage of the labor force that is unemployed.<br />

- Market Indicators<br />

  - 22066 - Bovespa Index: The main stock market index in Brazil.<br />
  - 26017 - Risk Premium: Measure of risk perception for Brazilian assets.<br />

- Credit and Loans<br />

  - 20439 - Average Loan Interest Rate: The average rate charged by banks on loans.<br />
  - 20440 - Default Rate: The percentage of loans in default.<br />

- Commodities<br />

  - 22358 - Commodity Price Index: Prices of commodities important to the Brazilian economy.<br />
  - 24365 - Oil Prices: Average price of crude oil.<br /><br />

### Yahoo Finance API
This API brings the day by day stock indicator but there are two main options to use, the "historical" and the "chart" components.<br />
The main difference between both is that the "historical" is much simpler, however is not that complete, and the "chart" is super complete, but quite complex.<br /><br />
- historical code:<br />
```
const queryOptions = { period1: '2025-01-20', };
const result = await yahooFinance.historical(symbol, queryOptions);
console.log(result);
```
- historical result:<br />
```
[
  {
    date: 2025-01-20T13:00:00.000Z,
    high: 37.43000030517578,
    volume: 13912800,
    open: 37.220001220703125,
    low: 37.11000061035156,
    close: 37.290000915527344,
    adjClose: 37.290000915527344
  },
  {
    date: 2025-01-21T13:00:00.000Z,
    high: 37.349998474121094,
    volume: 23612200,
    open: 37.099998474121094,
    low: 36.720001220703125,
    close: 37.29999923706055,
    adjClose: 37.29999923706055
  },
  {
    date: 2025-01-22T13:00:00.000Z,
    high: 37.630001068115234,
    volume: 21832200,
    open: 37.36000061035156,
    low: 37.029998779296875,
    close: 37.09000015258789,
    adjClose: 37.09000015258789
  },
  {
    date: 2025-01-23T13:00:00.000Z,
    high: 37.40999984741211,
    volume: 26725700,
    open: 37.119998931884766,
    low: 36.70000076293945,
    close: 36.83000183105469,
    adjClose: 36.83000183105469
  },
  {
    date: 2025-01-24T13:31:17.000Z,
    high: 36.900001525878906,
    volume: 946300,
    open: 36.880001068115234,
    low: 36.7599983215332,
    close: 36.790000915527344,
    adjClose: 36.790000915527344
  }
]
```


- date<br />
- high<br />
- volume<br />
- open<br />
- low<br />
- close<br />
- adjClose<br />
