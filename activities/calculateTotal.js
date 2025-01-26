// convert this to typescript

function calculateTotal(price, quantity) {
    return price * quantity;
  }
  
  const order = {
    item: "Notebook",
    price: 50,
    quantity: 3,
  };
  
  console.log(`Total: $${calculateTotal(order.price, order.quantity)}`);