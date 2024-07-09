function updateProductById(id, updatedProduct) {
    return fetch(`http://localhost:9999/product/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Sản phẩm đã được cập nhật:', data);
            return data;
        })
        .catch(error => {
            console.error("Lỗi:", error);
        });
}

const updatedProduct = {
    name: "giày thể thao",
    price: 45000
};

const productIdToUpdate = 1; // Thay thế ID của sản phẩm bạn muốn cập nhật

updateProductById(productIdToUpdate, updatedProduct).then(updatedData => {
    console.log("Thông tin sản phẩm sau khi cập nhật:", updatedData);
});
