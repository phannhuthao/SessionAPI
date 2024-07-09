function getProductById(id) {
    fetch(`http://localhost:9999/product/${id}`)
        .then(response => {
            if (!response.ok) {
                if (response.status === 404) {
                    console.log("Không tìm thấy sản phẩm");
                } else {
                    console.log(`Lỗi: ${response.status}`);
                }
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(product => {
            console.log(product);
        })
        .catch(error => {
            console.error("Có lỗi xảy ra:", error);
        });
}

getProductById(1);
