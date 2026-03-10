import periodicTable from "./PeriodicTable.json";

const container = document.querySelector(".p-table");

periodicTable.elements.forEach((element) => {
  if (element.category == "lanthanide" || element.category == "actinide") {
    return
  }
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="element group-${element.group}" style="--group: ${element.group};" data-name="${element.name}" data-category="${element.category}">
            <p class="element-symbol">${element.symbol}</p>
            <p class="element-name">${element.name}</p>
        </div>`,
  );
});
