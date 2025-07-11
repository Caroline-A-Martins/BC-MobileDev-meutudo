// Ações que o carrinho pode fazer
// Casos de uso

// ✅ Adicionar item no carrinho
async function addItem(userCart, item) {
  // Adiciona o item ao array do carrinho
  userCart.push(item);
}

// ✅ Calcular total do carrinho
async function calculateTotal(userCart) {
  // Soma o subtotal de todos os itens do carrinho e retorna o resultado
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  return result;
}

// ✅ Deletar item pelo nome (remove o item completamente do carrinho)
async function deletarItem(userCart, name) {
  // Encontra o índice do item pelo nome
  const index = userCart.findIndex((item) => item.name === name);

  // Se encontrou, remove o item do carrinho
  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// ⚠️ Função vazia (não implementada)
async function removeItem(userCart, name) {
  // Busca o índice do item pelo nome
  const indexFound = userCart.findIndex((p) => p.name === name);

  // Caso o item não seja encontrado, exibe mensagem e retorna
  if (indexFound === -1) {
    console.log("Item não encontrado");
    return;
  }

  // Se a quantidade do item for maior que 1, decrementa a quantidade
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  // Se a quantidade for 1, remove o item completamente do carrinho
  userCart.splice(indexFound, 1);
}

// ✅ Exibir itens do carrinho
async function displayCart(userCart) {
  console.log("Shopee cart list:");

  // Verifica se o carrinho está vazio e exibe mensagem
  if (userCart.length === 0) {
    console.log("Seu carrinho está vazio!");
    return;
  }

  // Percorre todos os itens do carrinho e exibe detalhes formatados
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price.toFixed(2)} | Qtde: ${
        item.quantity
      }x | Subtotal: R$ ${item.subtotal().toFixed(2)}`
    );
  });

  console.log("------ Fim do carrinho ------");
}

export { addItem, calculateTotal, deletarItem, removeItem, displayCart };
