function getAllProduct() {
    return fetch('http://localhost:9999/product')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(products => {
        console.log('Danh sách sản phẩm');
        products.forEach(product => {
          console.log(`- ${product.name}: ${product.price}`);
        });
        return products;
      })
      .catch(error => {
        console.error("Có lỗi", error);
      });
  }
  
  getAllProduct();