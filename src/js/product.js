import products from './products.json';
import productImages from '../img/*.png';

function productDetails(){
    const productContainer = document.querySelector(".product-details");
    const productTemplate = ` 
        ${products.map(
            (product)=>`
            <div class="product-selector-container">
              <div class="product-img-container">
               <img src="${productImages[product.image]}" alt="Unsere Kaffee-Sorte ${product.productName}"></img>
              </div>
              <div class="product-selector">
                <div>
                  <h2>${product.productName}</h2>
                  <p>${(product.price/100).toFixed(2)}€</p>
                </div>
                <div class="selector">

                </div>
              </div>
            </div>
            <div class="product-description">
            <h2>Beschreibung</h2>
             ${product.description}  
            </div>
        `
        )
    .join("")}
    `;
    productContainer.innerHTML = productTemplate;
    console.log (productTemplate);
};

productDetails();