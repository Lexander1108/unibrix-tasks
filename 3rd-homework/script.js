const tableBodyElement = document.querySelector('[data-table-body]');
const tableRowTemplateElement = document.querySelector('[data-table-row]');

function byField(key) {
  return (a, b) => a[key] > b[key] ? 1 : -1;
}

function templateRecorder(data) {
  data.forEach(row => {
    const tableRowElement = tableRowTemplateElement.content.cloneNode(true);
    const currency = tableRowElement.querySelector('[data-currency]');
    const baseCurrency = tableRowElement.querySelector('[data-base-currency]');
    const buy = tableRowElement.querySelector('[data-buy]');
    const sale = tableRowElement.querySelector('[data-sale]');

    currency.innerText = row.ccy;
    baseCurrency.innerText = row.base_ccy;
    buy.innerText = Number(row.buy).toFixed(2);
    sale.innerText = Number(row.sale).toFixed(2);
    tableBodyElement.appendChild(tableRowElement);
  });
}

const currencyHeadingElement = document.querySelector('[data-table-currency]');
const baseCurrencyHeadingElement = document.querySelector('[data-table-base-currency]');
const buyHeadingElement = document.querySelector('[data-table-buy]');
const saleHeadingElement = document.querySelector('[data-table-sale]');

function sortElements(element, data, str){
  element.addEventListener('click', () => {
    data.sort(byKey(str));
    tableBodyElement.innerHTML = '';
    templateRecorder(data);
  });
}

fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    templateRecorder(data);
    sortElements(currencyHeadingElement, data, 'ccy');
    sortElements(baseCurrencyHeadingElement, data, 'base_ccy');
    sortElements(buyHeadingElement, data, 'buy');
    sortElements(saleHeadingElement, data, 'sale');
});