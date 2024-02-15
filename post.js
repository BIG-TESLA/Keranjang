const dropArea = document.getElementById("drop-area");
const imageInput = document.getElementById("image-input");
const imgView = document.getElementById("img-view");
const form = document.getElementById("product-form");

imageInput.addEventListener("change", uploadImage);

function uploadImage() {
    const imgLink = URL.createObjectURL(imageInput.files[0]);
    imgView.style.backgroundImage = `url(${imgLink})`;
    imgView.textContent = "";
    imgView.style.border = 0;
}

document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submit-btn");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const productName = document.getElementById("productNama").value;
        const productPrice = document.getElementById("productHarga").value;
        const productTotal = document.getElementById("productTotal").value;
        const productImage = document.getElementById("image-input").files[0];

        const formData = new FormData();
        formData.append('nama', productName);
        formData.append('harga', productPrice);
        formData.append('total', productTotal);
        formData.append('image', productImage);

        fetch("https://3c58-2001-448a-50c2-4c22-c1fb-a0a2-5f87-d2fd.ngrok-free.app/keranjang", {
            mode: "cors",
            method: "POST",
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
            body: formData
        })
        .then((res) => res.json())
        .then(data => {
            console.log("Product uploaded successfully:", data);
        })
        .catch(error => {
            console.error("Error uploading product:", error);
        });
    });
});
