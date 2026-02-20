import periodicTable from "./PeriodicTable.json";

const container = document.querySelector(".container");

periodicTable.elements.forEach((element) => {
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="element group-${element.group}">
            <p class="element-symbol">${element.symbol}</p>
            <p class="element-name">${element.name}</p>
        </div>`,
  );
});
