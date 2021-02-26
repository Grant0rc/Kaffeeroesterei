
import products from './products.json';
import productImages from '../img/*.png';

function shop(){
    const productContainer = document.querySelector(".product-list-container");
    const productTemplate = ` 
        ${products.map(
            (product)=>`
            <div class="product-container">
            <a href="../Coffee/index.html?product=${product.id}">
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
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.50301 11.4821C8.08859 10.0916 7.12103 8.31318 5.34192 7.50998C3.56281 6.70679 1.64586 7.18294 1.06028 8.57349C0.474703 9.96404 1.44225 11.7424 3.22136 12.5456C5.00048 13.3488 6.91743 12.8727 7.50301 11.4821Z" stroke="#1A1A1A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.29492 8.50635C1.29492 8.50635 2.84649 10.2929 4.05825 10.1347C5.27 9.97648 5.9233 10.4702 7.30891 11.8394" stroke="#1A1A1A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.01953 7.30917C5.03797 5.95905 6.29451 4.80531 8.03048 4.47528C9.94031 4.11252 11.7 5.02897 11.966 6.52092C12.2321 8.01287 10.8992 9.51574 8.98934 9.8785C8.51255 9.9685 8.04365 9.97941 7.60636 9.92214" stroke="#1A1A1A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.8053 6.7117C11.8053 6.7117 9.55306 6.12801 8.63634 6.9599C7.71699 7.7918 6.9952 7.74816 5.10645 7.41267" stroke="#1A1A1A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.12438 5.57895C6.88165 5.24487 8.10874 3.8606 7.86517 2.4871C7.62161 1.1136 5.99961 0.270984 4.24235 0.605061C2.48509 0.939138 1.258 2.3234 1.50156 3.6969C1.74513 5.07041 3.36712 5.91303 5.12438 5.57895Z" stroke="#1A1A1A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.71914 2.66452C7.71914 2.66452 5.64599 2.1272 4.80039 2.89363C3.9548 3.66006 3.20931 3.63006 1.4707 3.32185" stroke="#1A1A1A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.90902 13.0002H3.14278C2.58173 13.0002 2.12793 12.5697 2.12793 12.0376V4.18018H8.92387V12.0376C8.92387 12.5697 8.47007 13.0002 7.90902 13.0002Z" stroke="#1A1A1A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.92355 3.0166H1C1 3.65834 1.5473 4.17747 2.22387 4.17747H8.92079V3.0166H8.92355Z" stroke="#1A1A1A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.92387 3.01674H2.12793V2.68282C2.12793 2.15065 2.58173 1.72021 3.14278 1.72021H7.90902C8.47007 1.72021 8.92387 2.15065 8.92387 2.68282V3.01674Z" stroke="#1A1A1A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.08219 1.72H4.60254V1.70174C4.60254 1.31565 4.93257 1 5.34236 1C5.7494 1 6.08219 1.31304 6.08219 1.70174V1.72Z" stroke="#1A1A1A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.92511 10.8037H8.92676V4.18018H9.92511C10.5192 4.18018 11.0005 4.6367 11.0005 5.20018V9.78366C11.0005 10.3445 10.5192 10.8037 9.92511 10.8037Z" stroke="#1A1A1A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.92387 8.06445H2.12793V8.8575H8.92387V8.06445Z" stroke="#1A1A1A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.34277 4.28174V7.8687" stroke="#1A1A1A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.65372 12.6346C5.70705 11.8805 4.97081 11.2097 4.00929 11.1363C3.04778 11.0629 2.22508 11.6146 2.17175 12.3686C2.11843 13.1226 2.85466 13.7934 3.81618 13.8669C4.77769 13.9403 5.60039 13.3886 5.65372 12.6346Z" stroke="#1A1A1A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.27344 12.2974C2.27344 12.2974 3.28551 12.8733 3.82636 12.5895C4.36988 12.3085 4.75275 12.4281 5.62025 12.8372" stroke="#1A1A1A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.82576 11.0984C3.61959 10.4612 4.02656 9.70159 4.78696 9.25083C5.625 8.75277 6.59423 8.88354 6.95569 9.54021C7.31715 10.1969 6.9316 11.1318 6.09356 11.6298C5.88471 11.7551 5.66784 11.8385 5.45365 11.8858" stroke="#1A1A1A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.91296 9.6543C6.91296 9.6543 5.76433 9.7656 5.46713 10.3137C5.16994 10.8619 4.82455 10.9648 3.88477 11.1318" stroke="#1A1A1A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.59848 10.2676C4.36869 9.80996 4.72355 8.9491 4.3911 8.34479C4.05865 7.74048 3.16478 7.62155 2.39457 8.07915C1.62437 8.53675 1.2695 9.39761 1.60195 10.0019C1.9344 10.6062 2.82828 10.7252 3.59848 10.2676Z" stroke="#1A1A1A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.35303 8.45166C4.35303 8.45166 3.29544 8.55183 3.02234 9.05824C2.74656 9.56465 2.39314 9.67873 1.52832 9.82898" stroke="#1A1A1A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.96405 6.60201C3.84622 6.50344 4.50331 5.86243 4.4317 5.17027C4.36009 4.4781 3.5869 3.99689 2.70473 4.09546C1.82256 4.19402 1.16547 4.83504 1.23708 5.5272C1.30869 6.21937 2.08188 6.70057 2.96405 6.60201Z" stroke="#1A1A1A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.3536 5.25239C4.3536 5.25239 3.34688 4.90459 2.89975 5.25518C2.45261 5.60298 2.0858 5.56125 1.23438 5.34143" stroke="#1A1A1A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.8734 12.6441C12.409 11.909 12.4103 10.9725 11.8763 10.5522C11.3423 10.132 10.4752 10.3872 9.93955 11.1222C9.40393 11.8573 9.40263 12.7938 9.93664 13.2141C10.4706 13.6343 11.3378 13.3791 11.8734 12.6441Z" stroke="#1A1A1A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.8824 10.667C11.8824 10.667 10.948 11.1929 10.8864 11.7689C10.8248 12.3448 10.541 12.5952 9.80469 13.0877" stroke="#1A1A1A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.43652 10.5332L3.37095 11.1815" stroke="#1A1A1A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.63833 12.7536L6.85122 13.5967L10.9825 8.65501C11.9651 7.12743 11.6412 5.44125 10.1713 4.42009L10.024 4.31713C8.55408 3.29597 6.54867 3.71334 5.56872 5.24091L3.91406 7.8147" stroke="#1A1A1A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.43652 10.5332L3.37095 11.1815" stroke="#1A1A1A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.75614 12.8371L6.67183 13.4715L9.34124 9.31729C10.1311 8.08744 9.8098 6.41239 8.62637 5.59156L8.50588 5.50809C7.32245 4.68726 5.71063 5.02116 4.92078 6.25101L3.91406 7.81754" stroke="#1A1A1A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.7093 4.82086C10.7093 4.82086 12.7174 3.04008 12.945 2.30829C13.1726 1.5765 12.6157 1.19252 12.6157 1.19252C12.6157 1.19252 12.0989 0.755668 11.4938 1.19808C10.8887 1.64049 9.85254 4.1642 9.85254 4.1642" stroke="#1A1A1A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </div>
                </a>
            </div>
            
        `
        )
    .join("")}
    `;
    productContainer.innerHTML = productTemplate;
}

shop();