import { useState } from 'react'

function ProductCard({ product, addToCart }) {
  const [inCart, setInCart] = useState(false)

  const handleAdd = () => {
    addToCart(product.name)
    setInCart(true)
  }

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <button
        data-testid={'product-' + product.id}
        onClick={handleAdd}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard