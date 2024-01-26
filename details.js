// details.js

import { fetchProductById, deleteProduct, updateProduct } from './fech.js';
import { renderProductDetails } from './components.js';

document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        const product = await fetchProductById(productId);
        renderProductDetails(product);

        // Aggiungi eventi ai bottoni
        const deleteProductBtn = document.getElementById('deleteProductBtn');
        deleteProductBtn.addEventListener('click', async () => {
            await deleteProduct(productId);
            // Dopo l'eliminazione, reindirizza all'index o esegui altre azioni necessarie
            window.location.href = './index.html';
        });

        const editProductBtn = document.getElementById('editProductBtn');
        editProductBtn.addEventListener('click', async () => {
            const updatedDescription = prompt('Inserisci la nuova descrizione:');
            if (updatedDescription !== null) {
                // Esegui l'aggiornamento solo se l'utente ha inserito una nuova descrizione
                await updateProduct(productId, { description: updatedDescription });
                // Dopo l'aggiornamento, puoi reindirizzare all'index o eseguire altre azioni necessarie
                window.location.reload(); // Ricarica la pagina per visualizzare i dettagli aggiornati
            }
        });
    }
});
