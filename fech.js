// fech.js

const API_URL = 'https://striveschool-api.herokuapp.com/api/product/';

// Funzione per ottenere un prodotto per ID
export async function fetchProductById(productId) {
    const response = await fetch(`${API_URL}/${productId}`, {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmZmNkNjFkNTA1ODAwMTgzMDRiYWUiLCJpYXQiOjE3MDYwMzIzNDIsImV4cCI6MTcwNzI0MTk0Mn0.aPP2fBbr4KF0rVEgCIrPhPsfBdmRNMeIDDefd7y4f7k'
        }
    });
    const product = await response.json();
    return product;
}

// Funzione per ottenere tutti i prodotti
export async function fetchProducts() {
    const response = await fetch(API_URL, {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmZmNkNjFkNTA1ODAwMTgzMDRiYWUiLCJpYXQiOjE3MDYwMzIzNDIsImV4cCI6MTcwNzI0MTk0Mn0.aPP2fBbr4KF0rVEgCIrPhPsfBdmRNMeIDDefd7y4f7k'
        }
    });
    const products = await response.json();
    return products;
}

// Funzione per eliminare un prodotto
export async function deleteProduct(productId) {
    const response = await fetch(`${API_URL}/${productId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmZmNkNjFkNTA1ODAwMTgzMDRiYWUiLCJpYXQiOjE3MDYwMzIzNDIsImV4cCI6MTcwNzI0MTk0Mn0.aPP2fBbr4KF0rVEgCIrPhPsfBdmRNMeIDDefd7y4f7k'
        }
    });

    if (!response.ok) {
        throw new Error('Errore nella richiesta al server');
    }

    const deletedProduct = await response.json();
    console.log('Prodotto eliminato con successo:', deletedProduct);
    return deletedProduct;
}

// Funzione per aggiornare un prodotto
export async function updateProduct(productId, updatedData) {
    const response = await fetch(`${API_URL}/${productId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmZmNkNjFkNTA1ODAwMTgzMDRiYWUiLCJpYXQiOjE3MDYwMzIzNDIsImV4cCI6MTcwNzI0MTk0Mn0.aPP2fBbr4KF0rVEgCIrPhPsfBdmRNMeIDDefd7y4f7k'
        },
        body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
        throw new Error('Errore nella richiesta al server');
    }

    const updatedProduct = await response.json();
    console.log('Prodotto aggiornato con successo:', updatedProduct);
    return updatedProduct;
}
