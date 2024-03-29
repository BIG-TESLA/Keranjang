document.addEventListener('DOMContentLoaded', function () {
    function deleteProduct(productId) {
        fetch('https://f053-2001-448a-50c2-2390-ec5a-775c-7fe1-73eb.ngrok-free.app/keranjang/1',{
            mode: "cors",
            method: "DELETE",
            headers: {
                "ngrok-skip-browser-warning": "true",
            }
        })
        .then((res) => {
            if(!res.ok) {
                throw new Error("Failed to delete product");
            }
            return res.json();
        })
        .then((data) => {
            console.log("Product deleted successfully", data);
            window.location.reload();
        })
        .catch(error => console.error('Error deleting product:', error));
    }
    const cardContainerWrapper = document.getElementById('card-container-wrapper');

    fetch('https://f053-2001-448a-50c2-2390-ec5a-775c-7fe1-73eb.ngrok-free.app/keranjang', {
        mode: "cors",
        headers: {
            "ngrok-skip-browser-warning": "true",
        }
    })
    .then((res) => res.json())
    .then(({data}) => {
        data.forEach(produk => {
            const cardContainer = document.createElement('div');
            cardContainer.classList.add('card-container');
            cardContainer.innerHTML = `
                <div class="card">
                    <div class="card-content">
                        <img src="${produk.image}" alt="${produk.nama}">
                        <div class="card-info">
                            <a class="product-title">Nama: ${produk.nama}</a>
                        </div>
                    </div>
                </div>
                <div class="card-stock">
                    <div>
                        <a class="stock-price">Harga: ${produk.harga}</a>
                    </div>
                    <div>
                        <a class="stock-description">Total: ${produk.total}</a>
                    </div>
                </div>
                    <button class="btn-delete" type="button" data-id="${produk.id}">Delete</button>
                </div>
            `;
            cardContainerWrapper.appendChild(cardContainer);
        });
    })
});
