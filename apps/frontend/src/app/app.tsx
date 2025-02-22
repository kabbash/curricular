import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "../pages/home-page"
import { ProductPage } from "../pages/product-page"
import { Layout } from "../components/Layout"

export default function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </Layout>
  </BrowserRouter>
  )
}

