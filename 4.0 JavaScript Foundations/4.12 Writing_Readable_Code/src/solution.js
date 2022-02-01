/*
  Modify each function below to continue working with the suggested syntax.
  
  When a function's parameters reference `products`, it is referring to an array of objects. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

function getProductsBySize(products, size) {
  const result = [];
  for (let i = 0; i < products.length; i++) {
    let index = products[i];
    for (let j = 0; j < index.availableSizes.length; j++) {
      if (index.availableSizes[j] === size) {
        result.push(index);
      }
    }
  }

  return result;
}

function moreThanThreeProducts(products) {
  return products.length >= 4;
}

function checkForSizeByName(products, name, size) {
  let product = null;
  for (let i = 0; i < products.length; i++) {
    let idx = products[i];
    if (idx.name === name) {
      product = idx;
    }
  }

  if (!product) {
    return false;}
    else { return (product.availableSizes.includes(size))}

}

module.exports = {
  getProductsBySize,
  moreThanThreeProducts,
  checkForSizeByName,
};
