document.addEventListener("DOMContentLoaded", function () {
  const currencyTable = document
    .getElementById("currency-table")
    .getElementsByTagName("tbody")[0];
  if (!currencyTable) return;

  const apiUrl =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((currency) => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = currency.id;

        const symbolCell = document.createElement("td");
        row.setAttribute("data-symbol", currency.symbol);
        symbolCell.textContent = currency.symbol;

        const nameCell = document.createElement("td");
        nameCell.textContent = currency.name;

        row.appendChild(idCell);
        row.appendChild(symbolCell);
        row.appendChild(nameCell);

        currencyTable.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
