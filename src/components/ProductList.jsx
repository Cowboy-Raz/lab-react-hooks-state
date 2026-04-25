import ProductCard from './ProductCard'

export const sampleProducts = [
  { id: 1, name: 'Apple', category: 'Fruits' },
  { id: 2, name: 'Banana', category: 'Fruits' },
  { id: 3, name: 'Milk', category: 'Dairy' },
  { id: 4, name: 'Cheese', category: 'Dairy' },
  { id: 5, name: 'Bread', category: 'Veggies' },
]

function ProductList({ category, addToCart }) {
  const filtered = category === 'all'
    ? sampleProducts
    : sampleProducts.filter((p) => p.category === category)

  if (filtered.length === 0) {
    return <p>No products available</p>
  }

  return (
    <div>
      {filtered.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  )
}

export default ProductList