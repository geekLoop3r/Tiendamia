let navselector = document.getElementById("nav");
let options = [
    {title: "Todas las categorías", linkTo: ".categories.html"}, 
    {title: "Liquidación total", linkTo: "./outlet.html"},
    {title: "Costos y tarifas", linkTo: "./prices.html"},
    {title: "Mis pedidos", linkTo: "./orders.html"},
    {title: "Contactos", linkTo: "./contacts.html"},
];  

for (let option of options){
    const anchor = document.createElement("a");
    anchor.className = "nav-button";
    anchor.textContent = option.title;
    anchor.href = option.linkTo;
    navselector = appendChild(anchor);
}