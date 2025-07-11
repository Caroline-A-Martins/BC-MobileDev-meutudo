//casos de uso

//criar item com subtotal certo
async function creareItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    subtotal: () => price * quantity,
  };
}

export default creareItem;
