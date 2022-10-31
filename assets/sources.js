let counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 5000);

function buy(product_name, product_price) {
  const message = `Halo Kak saya mau beli ${product_name} 
  Rp ${product_price}.000`;
  const wa = `https://wa.me/6285840336445?text=${message}`;
  open(wa, "_blank");

}

function chat() {
  open(`Hallo Kak Saya mau tanya nih`);
}

document.getElementById("year").innerHTML = new Date().getFullYear();
