import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to your Shopee Cart!");

const item1 = await createItem("Camisa", 20.99, 1);
const item2 = await createItem("Calça", 50, 3);

// Adiciona itens
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// Remove uma unidade do item "Calça" duas vezes
await cartService.removeItem(myCart, item2.name);
await cartService.removeItem(myCart, item2.name);

// Exibe o carrinho atualizado
await cartService.displayCart(myCart);

// Remove itens (descomente para testar exclusão total)
/*
await cartService.deletarItem(myCart, item2.name);
await cartService.deletarItem(myCart, item1.name);
*/

// Calcula e mostra total formatado
const total = await cartService.calculateTotal(myCart);
console.log(`\n🎁 Shopee Cart TOTAL IS: R$ ${total.toFixed(2)}`);
