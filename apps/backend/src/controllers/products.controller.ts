import { getAllProducts, getProductById } from "../services/products.service"

export const handleGetProducts = async (req, res) => {
    try {
        const products = await getAllProducts()
        res.status(200).json({
            products
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

export const handleGetProductById = async (req, res) => {
    try {
        const { id } = req.params
        const product = await getProductById(Number(id))
        res.status(200).json({
            product
        })
    } catch (error) {
        res.status(404).send(error)
    }
}