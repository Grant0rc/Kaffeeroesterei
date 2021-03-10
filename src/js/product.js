import products from './products.json';
import productImages from '../img/*.png';

console.log("before function")

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const productID = urlParams.get ('productID')
console.log (productID);

const product = products[productID];
console.log (product);

function productDetails(){
  console.log ('starting function');
    const productContainer = document.querySelector(".product-details");
    const productTemplate = ` 
            <div class="product-selector-container">
              <div class="p-det-img-container">
               <img class="p-det-img" src="${productImages[product.image]}" alt="Unsere Kaffee-Sorte ${product.productName}"></img>
              </div>
              <div class="product-selector">
                <div class="p-title-box">
                  <h2>${product.productName}</h2>
                  <p class="p-det-price">${(product.price/100).toFixed(2)}€</p>
                </div>
                <div class="p-det-summ">Diese Kaffee-Sorte ist etwas ganz besonderes! Die anderen sind auch klasse, aber diese hier ist definitiv einzigartig. Also einfach bestellen und probieren!</div>
                <div class="selector">
                <button class="cart-btn">In den Warenkorb</button>

                </div>
                <div class="p-det-icon-container">
                    <div class="p-det-icons">
                      <svg width="47" height="52" viewBox="0 0 47 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M28.4825 42.0974C30.7055 36.9991 27.0325 30.479 20.2787 27.5342C13.525 24.5894 6.24791 26.3351 4.02498 31.4334C1.80204 36.5316 5.47501 43.0518 12.2288 45.9965C18.9825 48.9413 26.2596 47.1956 28.4825 42.0974Z" stroke="#3A3734" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M4.91504 31.188C4.91504 31.188 10.805 37.738 15.405 37.158C20.005 36.578 22.485 38.388 27.745 43.408" stroke="#3A3734" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M19.0557 26.7984C19.1257 21.8484 23.8957 17.6184 30.4857 16.4084C37.7357 15.0784 44.4157 18.4384 45.4257 23.9084C46.4357 29.3784 41.3757 34.8884 34.1257 36.2184C32.3157 36.5484 30.5357 36.5884 28.8757 36.3784" stroke="#3A3734" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M44.8157 24.6085C44.8157 24.6085 36.2657 22.4685 32.7857 25.5185C29.2957 28.5685 26.5557 28.4085 19.3857 27.1785" stroke="#3A3734" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M19.4543 20.4537C26.1251 19.2289 30.7833 14.1537 29.8587 9.11798C28.9341 4.08227 22.7768 0.99294 16.106 2.21778C9.43512 3.44262 4.77689 8.5178 5.70151 13.5535C6.62612 18.5892 12.7834 21.6786 19.4543 20.4537Z" stroke="#3A3734" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M29.3059 9.76837C29.3059 9.76837 21.4359 7.79837 18.2259 10.6084C15.0159 13.4184 12.1859 13.3084 5.58594 12.1784" stroke="#3A3734" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <svg width="39" height="48" viewBox="0 0 39 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26.1196 46.9999H8.78961C6.74961 46.9999 5.09961 45.3499 5.09961 43.3099V13.1899H29.8096V43.3099C29.8096 45.3499 28.1596 46.9999 26.1196 46.9999Z" stroke="#3A3734" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M29.81 8.72998H1C1 11.19 2.98998 13.18 5.44998 13.18H29.8V8.72998H29.81Z" stroke="#3A3734" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M29.8096 8.72977H5.09961V7.44977C5.09961 5.40977 6.74961 3.75977 8.78961 3.75977H26.1196C28.1596 3.75977 29.8096 5.40977 29.8096 7.44977V8.72977Z" stroke="#3A3734" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M19.4796 3.76001H14.0996V3.69C14.0996 2.21 15.2996 1 16.7896 1C18.2696 1 19.4796 2.2 19.4796 3.69V3.76001Z" stroke="#3A3734" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M33.4503 38.58H29.8203V13.1899H33.4503C35.6103 13.1899 37.3603 14.9399 37.3603 17.0999V34.67C37.3603 36.82 35.6103 38.58 33.4503 38.58Z" stroke="#3A3734" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M29.8096 28.0801H5.09961V31.1201H29.8096V28.0801Z" stroke="#3A3734" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M16.79 13.5801V27.3301" stroke="#3A3734" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <svg width="47" height="49" viewBox="0 0 47 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.3801 42.8142C18.5793 40.1043 15.8295 37.6936 12.2383 37.4296C8.64714 37.1657 5.57446 39.1485 5.37529 41.8584C5.17611 44.5683 7.92587 46.9791 11.517 47.2431C15.1082 47.507 18.1809 45.5241 18.3801 42.8142Z" stroke="#3A3734" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M5.75488 41.6016C5.75488 41.6016 9.53489 43.6716 11.5549 42.6516C13.5849 41.6416 15.0149 42.0716 18.2549 43.5416" stroke="#3A3734" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M11.5545 37.2919C10.7845 35.0019 12.3045 32.2719 15.1445 30.6519C18.2745 28.8619 21.8945 29.3319 23.2445 31.6919C24.5945 34.0519 23.1545 37.4119 20.0245 39.2019C19.2445 39.6519 18.4345 39.9519 17.6345 40.1219" stroke="#3A3734" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M23.0844 32.1021C23.0844 32.1021 18.7944 32.502 17.6844 34.472C16.5744 36.442 15.2844 36.812 11.7744 37.412" stroke="#3A3734" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M10.7051 34.3071C13.5817 32.6625 14.9071 29.5687 13.6654 27.3968C12.4238 25.225 9.08523 24.7975 6.2086 26.4421C3.33197 28.0867 2.00657 31.1806 3.24824 33.3524C4.48991 35.5243 7.82845 35.9517 10.7051 34.3071Z" stroke="#3A3734" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M13.5246 27.7822C13.5246 27.7822 9.57461 28.1422 8.55461 29.9622C7.52461 31.7822 6.20461 32.1922 2.97461 32.7322" stroke="#3A3734" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M8.3347 21.1331C11.6295 20.7788 14.0837 18.4751 13.8162 15.9875C13.5488 13.4999 10.661 11.7705 7.36619 12.1247C4.07137 12.4789 1.6172 14.7827 1.88465 17.2703C2.1521 19.7579 5.03988 21.4873 8.3347 21.1331Z" stroke="#3A3734" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M13.524 16.2821C13.524 16.2821 9.76402 15.0321 8.09402 16.2921C6.42402 17.5421 5.05402 17.3921 1.87402 16.6021" stroke="#3A3734" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M41.6105 42.8479C43.6109 40.2063 43.6158 36.8403 41.6213 35.33C39.6269 33.8196 36.3883 34.7367 34.3878 37.3784C32.3873 40.0201 32.3825 43.386 34.3769 44.8964C36.3714 46.4067 39.61 45.4896 41.6105 42.8479Z" stroke="#3A3734" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M41.6448 35.7422C41.6448 35.7422 38.1548 37.6322 37.9248 39.7022C37.6948 41.7722 36.6348 42.6722 33.8848 44.4422" stroke="#3A3734" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M6.36426 35.2617L9.85425 37.5917" stroke="#3A3734" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M18.3248 43.2418L22.8548 46.2718L38.2848 28.5118C41.9548 23.0218 40.7448 16.9618 35.2548 13.2918L34.7048 12.9218C29.2148 9.25178 21.7248 10.7518 18.0648 16.2418L11.8848 25.4918" stroke="#3A3734" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M6.36426 35.2617L9.85425 37.5917" stroke="#3A3734" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M18.7648 43.5417L22.1848 45.8217L32.1548 30.8917C35.1048 26.4717 33.9048 20.4517 29.4848 17.5017L29.0348 17.2017C24.6148 14.2517 18.5948 15.4517 15.6448 19.8717L11.8848 25.5017" stroke="#3A3734" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M37.2645 14.7319C37.2645 14.7319 44.7645 8.33189 45.6145 5.70189C46.4645 3.07189 44.3845 1.69189 44.3845 1.69189C44.3845 1.69189 42.4545 0.121889 40.1945 1.71189C37.9345 3.30189 34.0645 12.3719 34.0645 12.3719" stroke="#3A3734" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div class="p-det-icon-desc">
                        <p>Mild geröstet</p>
                        <p>Für French Press</p>
                        <p>gemahlen oder als Bohne</p>
                    </div>
                </div>
              </div>
            </div>
            <div class="product-description">
            <h3>Beschreibung</h3>
            <p>${product.description}</p> 
            </div>
        `;
    productContainer.innerHTML = productTemplate;
    console.log ("after function");
};

productDetails();