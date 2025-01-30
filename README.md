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

  - Taxa de Juros:<br />
    - website: https://dadosabertos.bcb.gov.br/dataset/11-taxa-de-juros---selic/resource/b73edc07-bbac-430c-a2cb-b1639e605fa8<br />
    - api example: https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados?formato=json&dataInicial=01/01/2024&dataFinal=01/01/2025<br />
  - Taxa de Juros anualizada base 252:<br />
    - website: https://dadosabertos.bcb.gov.br/dataset/1178-taxa-de-juros---selic-anualizada-base-252/resource/e7fe6edb-d6c3-49b1-a7ef-6e0e98b63270<br />
    - api example: https://api.bcb.gov.br/dados/serie/bcdata.sgs.1178/dados?formato=json&dataInicial=01/01/2024&dataFinal=01/01/2025<br />
  - Taxa de Juros acumulada no mês:<br />
    - website: https://dadosabertos.bcb.gov.br/dataset/4390-taxa-de-juros---selic-acumulada-no-mes/resource/449efbb5-366b-4907-820f-8143a63733e1<br />
    - api example: https://api.bcb.gov.br/dados/serie/bcdata.sgs.4390/dados?formato=json&dataInicial=01/01/2024&dataFinal=01/01/2025<br />
  - Taxa de Juros acumulada no mês anualizada base 252:<br />
    - website: https://dadosabertos.bcb.gov.br/dataset/4189-taxa-de-juros---selic-acumulada-no-mes-anualizada-base-252/resource/091e3cb3-4dca-488b-a89d-6c9bb56c9a99<br />
    - api example: https://api.bcb.gov.br/dados/serie/bcdata.sgs.4189/dados?formato=json&dataInicial=01/01/2024&dataFinal=01/01/2025<br />
  - Fator diário Taxa Extramercado:<br />
    - website: https://dadosabertos.bcb.gov.br/dataset/27803-sgs/resource/226d3f10-7d05-445d-a2a6-df62b7d48fd5<br />
    - api example: https://api.bcb.gov.br/dados/serie/bcdata.sgs.27803/dados?formato=json&dataInicial=01/01/2024&dataFinal=01/01/2025<br />


- Inflation Indices<br />

  - IPCA Duráveis:<br />
    - website: https://dadosabertos.bcb.gov.br/dataset/10843-indice-de-precos-ao-consumidor-amplo-ipca---duraveis<br />
    - api example: https://api.bcb.gov.br/dados/serie/bcdata.sgs.10843/dados?formato=json&dataInicial=01/01/2024&dataFinal=01/01/2025<br />
  - IPCA Serviços:<br />
    - website: https://dadosabertos.bcb.gov.br/dataset/10844-indice-de-precos-ao-consumidor-amplo-ipca---servicos<br />
    - api example: https://api.bcb.gov.br/dados/serie/bcdata.sgs.10844/dados?formato=json&dataInicial=01/01/2024&dataFinal=01/01/2025<br />
  - IPCA Comercializáveis:<br />
    - website: https://dadosabertos.bcb.gov.br/dataset/4447-indice-nacional-de-precos-ao-consumidor-amplo-ipca---comercializaveis<br />
    - api example: https://api.bcb.gov.br/dados/serie/bcdata.sgs.4447/dados?formato=json&dataInicial=01/01/2024&dataFinal=01/01/2025<br />
  - IPCA Não Comercializáveis:<br />
    - website: https://dadosabertos.bcb.gov.br/dataset/4448-indice-de-precos-ao-consumidor-amplo-ipca---nao-comercializaveis<br />
    - api example: https://api.bcb.gov.br/dados/serie/bcdata.sgs.4448/dados?formato=json&dataInicial=01/01/2024&dataFinal=01/01/2025<br />
  - IPCA Bens não duráveis:<br />
    - website: https://dadosabertos.bcb.gov.br/dataset/10841-indice-de-precos-ao-consumidor-amplo-ipca---bens-nao-duraveis<br />
    - api example: https://api.bcb.gov.br/dados/serie/bcdata.sgs.10841/dados?formato=json&dataInicial=01/01/2024&dataFinal=01/01/2025<br />
  - IPCA Bens semi duráveis:<br />
    - website: https://dadosabertos.bcb.gov.br/dataset/10842-indice-de-precos-ao-consumidor-amplo-ipca---bens-semi-duraveis<br />
    - api example: https://api.bcb.gov.br/dados/serie/bcdata.sgs.10842/dados?formato=json&dataInicial=01/01/2024&dataFinal=01/01/2025<br />
  - IPCA Ítens livres:<br />
    - website: https://dadosabertos.bcb.gov.br/dataset/11428-indice-nacional-de-precos-ao-consumidor---amplo-ipca---itens-livres<br />
    - api example: https://api.bcb.gov.br/dados/serie/bcdata.sgs.11428/dados?formato=json&dataInicial=01/01/2024&dataFinal=01/01/2025<br />
  - IPCA Preços monitorados TOTAL:<br />
    - website: https://dadosabertos.bcb.gov.br/dataset/4449-indice-nacional-de-precos-ao-consumidor-amplo-ipca---precos-monitorados---total<br />
    - api example: https://api.bcb.gov.br/dados/serie/bcdata.sgs.4449/dados?formato=json&dataInicial=01/01/2024&dataFinal=01/01/2025<br />
  - IPCA Índice de difusão:<br />
    - website: https://dadosabertos.bcb.gov.br/dataset/21379-indice-nacional-de-precos-ao-consumidor-amplo-ipca---indice-de-difusao<br />
    - api example: https://api.bcb.gov.br/dados/serie/bcdata.sgs.21379/dados?formato=json&dataInicial=01/01/2024&dataFinal=01/01/2025<br />
  - IPCA Núcleo de dupla ponderação:<br />
    - website: https://dadosabertos.bcb.gov.br/dataset/16122-indice-nacional-de-precos-ao-consumidor---amplo-ipca---nucleo-de-dupla-ponderacao<br />
    - api example: https://api.bcb.gov.br/dados/serie/bcdata.sgs.16122/dados?formato=json&dataInicial=01/01/2024&dataFinal=01/01/2025<br />
  - IPCA Núcleo por exclusão:<br />
    - website: https://dadosabertos.bcb.gov.br/dataset/16121-indice-nacional-de-precos-ao-consumidor---amplo-ipca---nucleo-por-exclusao---ex2<br />
    - api example: https://api.bcb.gov.br/dados/serie/bcdata.sgs.16121/dados?formato=json&dataInicial=01/01/2024&dataFinal=01/01/2025<br />
  - IPCA Números médias aparadas com suavização:<br />
    - website: https://dadosabertos.bcb.gov.br/dataset/4466-indice-nacional-de-precos-ao-consumidor-amplo-ipca---nucleo-medias-aparadas-com-suavizacao<br />
    - api example: https://api.bcb.gov.br/dados/serie/bcdata.sgs.4466/dados?formato=json&dataInicial=01/01/2024&dataFinal=01/01/2025<br />
  - IPCA Núcleo médias aparadas sem suavização:<br />
    - website: https://dadosabertos.bcb.gov.br/dataset/11426-indice-nacional-de-precos-ao-consumidor---amplo-ipca---nucleo-medias-aparadas-sem-suavizacao<br />
    - api example: https://api.bcb.gov.br/dados/serie/bcdata.sgs.11426/dados?formato=json&dataInicial=01/01/2024&dataFinal=01/01/2025<br />
  - IPCA Núcleo por exclusão Sem monitorados:<br />
    - website: https://dadosabertos.bcb.gov.br/dataset/11427-indice-nacional-de-precos-ao-consumidor---amplo-ipca---nucleo-por-exclusao---sem-monitorados-<br />
    - api example: https://api.bcb.gov.br/dados/serie/bcdata.sgs.11427/dados?formato=json&dataInicial=01/01/2024&dataFinal=01/01/2025<br />


- Exchange Rates - TO BE UPDATED<br />

https://opendata.bcb.gov.br/dataset/exchange-rates-daily-bulletins/resource/425c2538-be53-49aa-b607-fbe904804364
https://olinda.bcb.gov.br/olinda/service/PTAX/version/v1/documentation

  - 3695 - USD/BRL Exchange Rate: The exchange rate for the US dollar against the Brazilian real.<br />
  - 21620 - EUR/BRL Exchange Rate: The exchange rate for the Euro against the Brazilian real.<br />
  - 13621 - Currency Basket: Weighted average exchange rate of a currency basket.<br />

- Monetary Aggregates - TO BE UPDATED<br />

  - 27831 - M1: Money supply consisting of currency in circulation and demand deposits.<br />
  - 27832 - M2: Includes M1 plus savings accounts and term deposits.<br />
  - 27833 - M3: M2 plus marketable securities issued by financial institutions.<br />

- Public Finances - TO BE UPDATED<br />

  - 13762 - Public Debt/GDP Ratio: Government debt as a percentage of GDP.<br />
  - 14212 - Primary Budget Surplus: Government savings before interest payments.<br />
  - 14029 - Nominal Deficit: Budget deficit including interest payments.<br />

- Foreign Sector - TO BE UPDATED<br />

  - 22662 - Trade Balance: Exports minus imports for Brazil.<br />
  - 22663 - Current Account Balance: Includes trade balance, net income, and transfer payments.<br />
  - 22664 - Foreign Direct Investment: Investments made by foreign entities in Brazil.<br />

- Economic Activity - TO BE UPDATED<br />

  - 24363 - IBC-Br Index: A monthly proxy for GDP, reflecting economic activity.<br />
  - 24364 - Unemployment Rate: Percentage of the labor force that is unemployed.<br />

- Market Indicators - TO BE UPDATED<br />

  - 22066 - Bovespa Index: The main stock market index in Brazil.<br />
  - 26017 - Risk Premium: Measure of risk perception for Brazilian assets.<br />

- Credit and Loans - TO BE UPDATED<br />

  - 20439 - Average Loan Interest Rate: The average rate charged by banks on loans.<br />
  - 20440 - Default Rate: The percentage of loans in default.<br />

- Commodities - TO BE UPDATED<br />

  - 22358 - Commodity Price Index: Prices of commodities important to the Brazilian economy.<br />
  - 24365 - Oil Prices: Average price of crude oil.<br /><br />


### Yahoo Finance API

https://www.infomoney.com.br/cotacoes/empresas-b3/

This API brings the day by day stock indicator but there are two main options to use, the "historical" and the "chart" components.<br />
The main difference between both is that the "historical" is much simpler, however is not that complete, and the "chart" is super complete, but quite complex.<br /><br />
- historical code with data from '2025-01-20' untill today:<br />
```
const symbol = 'PETR4.SA'
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
- chart code with data from '2024-12-01' untill today:<br />
```
const symbol = 'PETR4.SA'
const queryOptions = { period1: '2024-12-01', return: "object", };
const result = await yahooFinance.chart(symbol, queryOptions);
console.log(result);
```
- chart results:<br />
```
{
  meta: {
    currency: 'BRL',
    symbol: 'PETR4.SA',
    exchangeName: 'SAO',
    fullExchangeName: 'São Paulo',
    instrumentType: 'EQUITY',
    firstTradeDate: 2000-01-03T12:00:00.000Z,
    regularMarketTime: 2025-01-24T13:45:22.000Z,
    hasPrePostMarketData: false,
    gmtoffset: -10800,
    timezone: 'BRT',
    exchangeTimezoneName: 'America/Sao_Paulo',
    regularMarketPrice: 36.75,
    fiftyTwoWeekHigh: 42.94,
    fiftyTwoWeekLow: 34.15,
    regularMarketDayHigh: 36.9,
    regularMarketDayLow: 36.72,
    regularMarketVolume: 1425800,
    longName: 'Petróleo Brasileiro S.A. - Petrobras',
    shortName: 'PETROBRAS   PN      N2',
    chartPreviousClose: 38.9,
    priceHint: 2,
    currentTradingPeriod: { pre: [Object], regular: [Object], post: [Object] },
    dataGranularity: '1d',
    range: '',
    validRanges: [
      '1d',  '5d',  '1mo',
      '3mo', '6mo', '1y',
      '2y',  '5y',  '10y',
      'ytd', 'max'
    ]
  },
  timestamp: [
    1733144400, 1733230800, 1733317200,
    1733403600, 1733490000, 1733749200,
    1733835600, 1733922000, 1734008400,
    1734094800, 1734354000, 1734440400,
    1734526800, 1734613200, 1734699600,
    1734958800, 1735218000, 1735304400,
    1735563600, 1735822800, 1735909200,
    1736168400, 1736254800, 1736341200,
    1736427600, 1736514000, 1736773200,
    1736859600, 1736946000, 1737032400,
    1737118800, 1737378000, 1737464400,
    1737550800, 1737637200, 1737726322
  ],
  events: { dividends: { '1734008400': [Object], '1735218000': [Object] } },
  indicators: { quote: [ [Object] ], adjclose: [ [Object] ] }
}
```
Now let's say that you want to access the indicators from the result above:<br />
```
console.log(result.indicators);
```
Results:<br />
```
{
  quote: [
    {
      close: [Array],
      open: [Array],
      volume: [Array],
      high: [Array],
      low: [Array]
    }
  ],
  adjclose: [ { adjclose: [Array] } ]
}
```
Now let's say that you want the first position bringing the values close, open, volume, high, low. All day by day:<br />
```
console.log(result.indicators.quote[0]);
```
Results:<br />
```
{
  low: [
     38.77000045776367,  39.08000183105469,
     38.97999954223633, 39.209999084472656,
    38.959999084472656,  39.36000061035156,
     40.11000061035156,  39.95000076293945,
    38.119998931884766,  37.91999816894531,
     37.83000183105469,  37.83000183105469,
    37.310001373291016,  36.97999954223633,
    36.709999084472656, 36.720001220703125,
    35.599998474121094,  35.61000061035156,
     35.77000045776367, 36.189998626708984,
     36.31999969482422, 36.060001373291016,
     36.29999923706055,  36.43000030517578,
     36.70000076293945, 36.900001525878906,
    36.970001220703125,  36.58000183105469,
     36.79999923706055,  36.77000045776367,
    36.849998474121094,  37.11000061035156,
    36.720001220703125, 37.029998779296875,
     36.70000076293945, 36.720001220703125
  ],
  close: [
    39.150001525878906,               39.5,
                 39.25,  39.63999938964844,
    39.029998779296875, 40.040000915527344,
    40.189998626708984,  40.59000015258789,
     38.34000015258789, 38.099998474121094,
    37.939998626708984,  38.29999923706055,
    37.310001373291016,  37.15999984741211,
    36.849998474121094,  36.86000061035156,
     35.77000045776367,  35.65999984741211,
    36.189998626708984,  36.77000045776367,
    36.380001068115234, 36.209999084472656,
     36.97999954223633,  36.68000030517578,
     36.84000015258789, 36.939998626708984,
     37.06999969482422,  36.81999969482422,
    37.290000915527344,  37.04999923706055,
     37.20000076293945, 37.290000915527344,
     37.29999923706055,  37.09000015258789,
     36.83000183105469,  36.77000045776367
  ],
  volume: [
    31711800, 22536200, 31584400, 25214200,
    31118500, 28548700, 21837600, 46900900,
    38310600, 23235400, 21349400, 39617200,
    58126400, 43268400, 59277400, 43785600,
    22920700, 24167200, 22355600, 30046800,
    23314200, 23760200, 37753300, 24483500,
    11526600, 40328800, 22897100, 29173100,
    32512700, 26733200, 39941100, 13912800,
    23612200, 21832200, 26725700,  1512300
  ],
  open: [
    38.900001525878906, 39.400001525878906,
                  39.5,  39.38999938964844,
     39.63999938964844, 39.380001068115234,
     40.29999923706055, 40.349998474121094,
    38.720001220703125, 38.599998474121094,
    38.189998626708984, 37.939998626708984,
    38.279998779296875,  37.65999984741211,
     37.15999984741211,                 37,
    35.630001068115234,                 36,
    35.779998779296875,  36.41999816894531,
    36.880001068115234, 36.599998474121094,
     36.54999923706055,   36.9900016784668,
     36.70000076293945,              37.25,
     37.29999923706055,  37.11000061035156,
     36.93000030517578, 37.209999084472656,
      37.0099983215332, 37.220001220703125,
    37.099998474121094,  37.36000061035156,
    37.119998931884766, 36.880001068115234
  ],
  high: [
    39.400001525878906,               39.5,
     39.86000061035156, 39.810001373291016,
     39.70000076293945,  40.16999816894531,
     40.43000030517578,   40.7599983215332,
     38.88999938964844,  38.72999954223633,
      38.2599983215332,   38.4900016784668,
    38.400001525878906,  37.93000030517578,
    37.349998474121094,  37.04999923706055,
                    36,                 36,
    36.369998931884766,  37.09000015258789,
    37.040000915527344, 36.689998626708984,
                 37.25, 37.119998931884766,
    36.970001220703125,  37.52000045776367,
    37.529998779296875, 37.130001068115234,
     37.31999969482422,   37.2400016784668,
    37.400001525878906,  37.43000030517578,
    37.349998474121094, 37.630001068115234,
     37.40999984741211, 36.900001525878906
  ]
}
```

As you can see the "chart" option is much much much more complete having all historical data and more information such as dividends, however it takes a extra effort to manip the data.<br />

