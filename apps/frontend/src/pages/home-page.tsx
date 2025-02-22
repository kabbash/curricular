import React, { useEffect, useState } from "react"
import { ProductCard, ProductCardProps } from "../components/product-card"
import { ProductMapper } from "../utils/productMapper"

export function HomePage() {
  const [products, setProducts] = useState<ProductCardProps[]>([])
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("http://localhost:3000/api/products")
      const data = await response.json()
      setProducts(ProductMapper.mapProducts(data.products))
    }
    getProducts()
  }, [])
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </main>
  )
}

