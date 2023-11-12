const taxRate = 0.18;   //? il önce atama yaptık
const shippingPrice = 15;
const shippingFreePrice = 300;

window. addEventListener("load", () => {  
  localStorage.setItem("taxRate" , taxRate);    //? yaptığımız atamaları localstorage ye gönderdik.
  localStorage.setItem("shippingPrice", shippingPrice);
  localStorage.setItem("shippingFreePrice", shippingFreePrice);

  calculateCartPrice();

});

const productsDiv = document.querySelector(".products");

productsDiv.addEventListener("click", (e) => {

  if (e.target.className === "fa-solid fa-minus") {

     if (e.target.nextElementSibling.innerText > 1) {
        e.target.nextElementSibling.innerText--;
        calculateproductPrice(e.target);
     }
     else{
      if (confirm(`${e.target.closest(".product-info").querySelector(h2).innerText}will be removed!`)) {
        e.target.closest(".product").remove();
      }
     }
     calculateCartPrice();
  }

  else if (e.target.classlist.contains("fa-plus")){
    e.target.parentElement.querySelector(".quantity").innerText++;
    calculateproductPrice(e.target;)
    calculateCartPrice();
  }
  else if (e.target.getAttribute("class") === "remove-product") {   

    if (confirm(`${e.target.closest(".product-info").querySelector("h2").innerText} will be removed`)) {
      e.target.closest(".product").remove();
    }
    calculateCartPrice();
  }
  else {
    alert("other element clicked");
  }
});

const calculateproductPrice = (target) => {

const productInfoDiv = target.closest(".product-info");
console.log(productInfoDiv);

const price = productInfoDiv.querySelector("div.product-price strong").innerText;

const quantity = productInfoDiv.querySelector("p.quantity").innerText;
productInfoDiv.querySelector("div.product-line-price").innerText = (price * quantity).
toFixed(2);
}

const calculateCartPrice = () => {
  const productLinePriceDiv = document. querySelectorAll(".produc-line-price");
  console.log(productLinePriceDiv);
  let subtotal = 0;
  productLinePriceDiv.forEach((div) => {
    subtotal += parseFloat(div.innerText);
  });
  console.log(subtotal);
  const taxPrice = subtotal * localStorage.getItem("taxRate");
  console.log(taxPrice);
  const shippingPrice = parseFloat(
    subtotal > 0 && subtotal < localStorage.getItem("shippingFreePrice") 
    ? localStorage.getItem("shippingPrice")
    : 0
  );
  console.log(shippingPrice);
  const totalPrice = subtotal + taxPrice + shippingPrice;
  console.log(totalPrice);

  document.querySelector("#cart-subtotal").lastElementChild.innerText = subtotal.toFixed(2);
  document.getElementById("cart-tax").children[1].innerText = taxPrice.toFixed(2)
  document.querySelector("#cart-shipping p:nth-child(2)").innerText=shippingPrice.toFixed(2)
  document.querySelector("#cart-total p:last-child").innerText = totalPrice.toFixed(2)
};
