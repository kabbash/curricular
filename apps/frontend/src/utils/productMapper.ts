import { Product, Review, User } from "@prisma/client"
import {ProductCardProps} from "../components/product-card"
import { ProductDetails } from "../pages/product-page";

type ProductDto = {
    reviews: {
        rating: number;
    }[];
} & Product

type ProductDetailsDto = {
    reviews: ({
        user: User;
    } & Review)[];
} & Product

export class ProductMapper {
  static mapProducts(products: ProductDto[]): ProductCardProps[] {
    return products.map((product: ProductDto) => {
      return {
        id: product.id,
        name: product.name,
        image: product.image,
        rating: product.reviews.flatMap((review) => review.rating).reduce((a, b) => a + b, 0) / product.reviews.length,
        reviewCount: product.reviews.length,
        price: product.price,
      }
    })
  }

  static mapProductDetails(product: ProductDetailsDto): ProductDetails {
    return {
      id: product.id,
      name: product.name,
      image: product.image,
      description: product.description,
      rating: product.reviews.flatMap((review) => review.rating).reduce((a, b) => a + b, 0) / product.reviews.length,
      reviewCount: product.reviews.length,
      price: product.price,
      reviews: product.reviews.map((review) => ({
        id: review.id,
        name: review.user?.name || 'Anonymous',
        rating: review.rating,
        comment: review.comment,
        date: new Date(review.createdAt).toLocaleString(),
      })),
    }
  }
}