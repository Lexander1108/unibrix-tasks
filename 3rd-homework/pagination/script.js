const data = [
    {"baseCurrency":"UAH","currency":"CHF","saleRateNB":15.6389750,"purchaseRateNB":15.6389750},
    {"baseCurrency":"UAH","currency":"EUR","saleRateNB":18.7949200,"purchaseRateNB":18.7949200},
    {"baseCurrency":"UAH","currency":"GBP","saleRateNB":23.6324910,"purchaseRateNB":23.6324910},
    {"baseCurrency":"UAH","currency":"PLZ","saleRateNB":4.4922010,"purchaseRateNB":4.4922010},
    {"baseCurrency":"UAH","currency":"RUR","saleRateNB":0.3052700,"purchaseRateNB":0.3052700},
    {"baseCurrency":"UAH","currency":"SEK","saleRateNB":2.0283750,"purchaseRateNB":2.0283750},
    {"baseCurrency":"UAH","currency":"UAH","saleRateNB":1.0000000,"purchaseRateNB":1.0000000},
    {"baseCurrency":"UAH","currency":"USD","saleRateNB":15.0564130,"purchaseRateNB":15.0564130},
    {"baseCurrency":"UAH","currency":"XAU","saleRateNB":17747.7470000,"purchaseRateNB":17747.7470000},
    {"baseCurrency":"UAH","currency":"CAD","saleRateNB":13.2107400,"purchaseRateNB":13.2107400}
]

const tableBody = document.querySelector('.tableBody');
const tableTemplate = document.querySelector('.tableTemplate');

function tableFilling(item) {
    const clone = tableTemplate.content.cloneNode(true);
    const baseCurrency = clone.querySelector('.baseCurrency');
    const currency = clone.querySelector('.currency');
    const buy = clone.querySelector('.buy');
    const sale = clone.querySelector('.sale');

    baseCurrency.innerText = item.baseCurrency;
    currency.innerText = item.currency;
    buy.innerText = Number(item.purchaseRateNB).toFixed(2);
    sale.innerText = Number(item.saleRateNB).toFixed(2);
    tableBody.appendChild(clone);
}

data.forEach(row => {
    tableFilling(row);
});

const forwardButton = document.querySelector('.forwardButton');
const backButton = document.querySelector('.backButton');
const numberOfRows = document.querySelector('.numberOfRows').value;

function tableDivider (startOfRange, item) {
    for (let i = startOfRange; i < item; i++){
        tableFilling(data[i]);
    }
}

function changeOfPage(element, startingRow, endingRow){
    element.addEventListener('click', () => {
        tableBody.innerHTML = '';
        tableDivider(startingRow, endingRow);
    });
}

function pagination (){
    event.preventDefault();
    const numberOfRows = document.querySelector('.numberOfRows').value;
    tableBody.innerHTML = '';
    
    tableDivider(0, Math.min(numberOfRows, 10));

    changeOfPage(forwardButton, numberOfRows, 10);
    changeOfPage(backButton, 0, numberOfRows)
}

const currencyHeadingElement = document.querySelector('tableHeadCurrency');
const baseCurrencyHeadingElement = document.querySelector('tableHeadBaseCurrency');
const buyHeadingElement = document.querySelector('tableHeadBuy');
const saleHeadingElement = document.querySelector('tableHeadSale');

function byField(key) {
    return (a, b) => a[key] > b[key] ? 1 : -1;
}

function sortElements(element, data, str){
    element.addEventListener('click', () => {
      data.sort(byKey(str));
      tableBodyElement.innerHTML = '';
      tableFilling(data);
    });
}

sortElements(currencyHeadingElement, data, 'tableHeadCurrency');