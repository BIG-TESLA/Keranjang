    const dropArea = document.getElementById("drop-area");
    const imageinput = document.getElementById("image-input");
    const imgview = document.getElementById("img-view");
    const form = document.getElementById("product-form");

    imageinput.addEventListener("change", uploadImage);

    function uploadImage() {
        let imgLink = URL.createObjectURL(imageinput.files[0]);
        imgview.style.backgroundImage = `url(${imgLink})`;
        imgview.textContent = "";
        imgview.style.border = 0;
    }
    document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submit-btn");
        form.addEventListener("submit", function (event) {
            event.preventDefault();

        const productName = document.getElementById("inputNama").value;
        const productDescription = document.getElementById("inputDeskripsi").value;
        const productPrice = document.getElementById("inputHarga").value;
        const productStock = document.getElementById("inputStok").value;
        const productImage = document.getElementById("image-input").files[0];

        const formData = new FormData();
        formData.append('nama', productName);
        formData.append('deskripsi', productDescription);
        formData.append('harga', productPrice);
        formData.append('stok', productStock);
        formData.append('image', productImage);

        fetch("https://3c58-2001-448a-50c2-4c22-c1fb-a0a2-5f87-d2fd.ngrok-free.app/produk/1", {
            mode: "cors",
            method: "PUT",
            headers: {
                        "ngrok-skip-browser-warning": "true",
                    },
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log("Product updated successfully:", data);
        })
        .catch(error => {
            console.error("Error updating product:", error);
        });
    });
});
