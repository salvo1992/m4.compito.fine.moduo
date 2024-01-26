// components.js

const API_URL = 'https://striveschool-api.herokuapp.com/api/product/';

export function renderProductCards(products) {
    const productList = document.getElementById('product-list');

    productList.innerHTML = ''; // Pulisce il contenuto precedente prima di renderizzare nuovi prodotti

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4');
        card.innerHTML = `
            <div class="card">
                <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <a href="./details.html?id=${product._id}" class="btn btn-primary">Dettagli</a>
                </div>
            </div>
        `;
        productList.appendChild(card);
    });
}

export async function handleAddProductForm() {
    const addProductForm = document.getElementById('addProductForm');
    
    addProductForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const productName = document.getElementById('productName').value;
        const productDescription = document.getElementById('productDescription').value;
        const productImageURL = document.getElementById('productImageURL').value;

        const newProduct = {
            name: productName,
            description: productDescription,
            imageUrl: productImageURL,
            price: 0,  // Sostituisci con il valore effettivo
            brand: "N/A",  // Sostituisci con il valore effettivo
        };

        await addProduct(newProduct);
    });
}

export async function addProduct(product) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmZmNkNjFkNTA1ODAwMTgzMDRiYWUiLCJpYXQiOjE3MDYwMzIzNDIsImV4cCI6MTcwNzI0MTk0Mn0.aPP2fBbr4KF0rVEgCIrPhPsfBdmRNMeIDDefd7y4f7k'
        },
        body: JSON.stringify(product),
    });

    const result = await response.json();
    console.log('Prodotto aggiunto con successo:', result);

    // Dopo aver aggiunto il prodotto, aggiorna la lista visualizzata
    const updatedProducts = await fetchProducts();
    renderProductCards(updatedProducts);
}

export async function fetchProducts() {
    const response = await fetch(API_URL, {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmZmNkNjFkNTA1ODAwMTgzMDRiYWUiLCJpYXQiOjE3MDYwMzIzNDIsImV4cCI6MTcwNzI0MTk0Mn0.aPP2fBbr4KF0rVEgCIrPhPsfBdmRNMeIDDefd7y4f7k'
        }
    });
    const products = await response.json();
    return products;
}

export function renderProductDetails(product) {
    const productDetails = document.getElementById('product-details');
    productDetails.innerHTML = `
        <div class="card">
            <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
            </div>
        </div>
    `;
}
