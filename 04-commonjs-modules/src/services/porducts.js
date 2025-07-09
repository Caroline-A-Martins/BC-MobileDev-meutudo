//Tds as funções que lidam com o produto
const productType = {
  version: "digital",
  tax: "x1",
};

//hidden const
const apiURL={
  url: "www.google.com/api"
}

async function getFullName(codeId, productName) {
  console.log("product: " + codeId + " -- " + productName);
}
async function getProductLabel(productName) {
  console.log("Product Name: " + productName);
}

module.exports = {
  getFullName,
  getProductLabel,
  productType
};
