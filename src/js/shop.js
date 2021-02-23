
import products from './products.json';
import productImages from '../img/*.png';

function shop(){
    const productContainer = document.querySelector(".product-list-container");
    const productTemplate = ` 
        ${products.map(
            (product)=>`
            <div class="product-container">
                <div class="shop-img-container">
                    <img class="shop-img" src="${productImages[product.image]}" alt="test">
                </div>
                <div class="product-name">
                    ${product.productName}
                </div>
                <div class="prices">
                    ${(product.price/100).toFixed(2)}€
                </div>
                <div class="shop-preview-icon-container">
                    <img src="../img/icon-coffee-beans.png" alt="*">
                    <img src="../img/icon-french-press.png" alt="*">
                    <img src="../img/icon-coffee-shovel.png" alt="*">
                </div>
            </div>
        `
        )
    .join("")}
    `;
    productContainer.innerHTML = productTemplate;
}

shop();