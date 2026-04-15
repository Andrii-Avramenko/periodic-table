import periodicTable from "./PeriodicTable.json";

const containerTop = document.querySelector(".p-top");
const containerLanthanide = document.querySelector(".p-lanthanide");
const containerActinide = document.querySelector(".p-actinide");

periodicTable.elements.forEach((element) => {
  if (element.category !== "lanthanide" && element.category !== "actinide") {
    containerTop.insertAdjacentHTML(
      "beforeend",
      `<div class="element g-${element.group} ${element.category}" style="--group: ${element.group};" data-name="${element.name}" data-category="${element.category}">
            <div class="element-atominfo">
              <p class="element-atomnum">${element.number}</p>
              <p class="element-atommass">${Math.round(element.atomic_mass)}</p>
            </div>
            <p class="element-symbol">${element.symbol}</p>
            <p class="element-name">${element.name}</p>
        </div>`,
    );
  } else if (element.category !== "lanthanide") {
    containerLanthanide.insertAdjacentHTML(
      "beforeend",
      `<div class="element g-${element.group} ${element.category}" style="--group: ${element.group};" data-name="${element.name}" data-category="${element.category}">
            <p class="element-atomnum">${element.number}</p>
            <p class="element-symbol">${element.symbol}</p>
            <p class="element-name">${element.name}</p>
        </div>`,
    );
  } else if (element.category !== "actinide") {
    containerActinide.insertAdjacentHTML(
      "beforeend",
      `<div class="element g-${element.group} ${element.category}" style="--group: ${element.group};" data-name="${element.name}" data-category="${element.category}">
            <p class="element-atomnum">${element.number}</p>
            <p class="element-symbol">${element.symbol}</p>
            <p class="element-name">${element.name}</p>
        </div>`,
    );
  }
});
