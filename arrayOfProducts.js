function arrayOfProducts(array) {
  let leftAcc = 1;
  const leftCalc = [];

  for (let i = 0; i < array.length; i++) {
    leftCalc[i] = leftAcc;
    leftAcc *= array[i];
  }

  let rightAcc = 1;
  const rightCalc = [];

  for (let i = array.length - 1; i >= 0; i--) {
    rightCalc[i] = rightAcc;
    rightAcc *= array[i];
  }

  const productCalc = [];
  for (let i = 0; i < leftCalc.length; i++) {
    productCalc[i] = leftCalc[i] * rightCalc[i];
  }

  return productCalc;
}

arrayOfProducts([5, 1, 4, 2]);
