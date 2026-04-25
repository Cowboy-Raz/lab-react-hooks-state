function Cart({ cart }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item, index) => (
        <p key={index}>{item} is in your cart.</p>
      ))}
    </div>
  );
}

export default Cart;