function createProduct(product) {
    return fetch('http://localhost:9999/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then(response => {
        console.log("response", response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Sản phẩm đã được thêm vào', data);
        return data;
      })
      .catch(error => {
        console.error("lỗi", error);
      });
  }
  
  const newProduct = {
    name: "giày",
    price: 40000
  };
  
  createProduct(newProduct).then(addedProduct => {
    console.log("Sản phẩm được thêm vào", addedProduct);
  });
  