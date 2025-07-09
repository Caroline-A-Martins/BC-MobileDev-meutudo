// const product = require("./services/porducts");
const { getFullName, productType } = require("./services/porducts");
const config = require("./services/config");
const database = require("./services/database");

async function main() {
  // console.log("Carrinho de compras")

  getFullName("1", "Monitor");
  // product.getFullName("14", "mouse")
  // product.getFullName("18", "computer")
  // product.getProductLabel("Teclado")

  // product.productType
  // console.log(config.production)

  database.connectToDatabasa("my-data");
}

main();
