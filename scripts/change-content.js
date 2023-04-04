document.addEventListener("DOMContentLoaded", () => {
    const description = document.querySelectorAll(".timing__discription"),
    date = document.querySelectorAll(".date"),
    price = document.querySelectorAll(".c-price"),
    oldPrice = document.querySelectorAll(".old-price");
    count = document.querySelectorAll(".count");

    async function getInfo() {
    const info = "info.json";
    const res = await fetch(info);
    const data = await res.json();

    for (let i = 0; i < data.length; i++) {
      description[i].textContent = data[i].cat;
      date[i].textContent = data[i].date;
      count[i].textContent = data[i].count;
      oldPrice[i].textContent = data[i].oldPrice;
      price[i].textContent = data[i].price;
    }
  }
  getInfo();
});