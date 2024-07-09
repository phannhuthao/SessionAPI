function removeProductById(id) {
    return fetch(`http://localhost:9999/product/${id}`, {
        method: 'DELETE',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Sản phẩm đã được xóa:', data);
            return data;
        })
        .catch(error => {
            console.error("Có lỗi xảy ra:", error);
        });
}

// Fetch all products
getAllProduct().then(product => {
    console.log(product);
});

removeProductById(1).then(deletedProduct => {
    console.log(deletedProduct);
});
