import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewCard } from '../components/review-card';
import { StarRating } from '../components/star-rating';
import { ProductMapper } from '../utils/productMapper';

// This would typically come from your API based on the ID
interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface ProductDetails {
  id: number;
  name: string;
  image: string;
  description: string;
  rating: number;
  reviewCount: number;
  price: number;
  reviews: Review[];
}

export function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductDetails | null>(null);
  useEffect(() => {
    const getProductById = async () => {
      const response = await fetch(`http://localhost:3000/api/products/${id}`);
      const data = await response.json();

      setProduct(ProductMapper.mapProductDetails(data.product));
    };
    getProductById();
  }, [id]);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="relative aspect-square">
          <img
            src={product?.image || '/placeholder.svg'}
            alt={product?.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product?.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <StarRating rating={product?.rating || 0} />
            <span className="text-muted-foreground">
              ({product?.reviewCount} reviews)
            </span>
          </div>
          <div className="text-2xl font-bold mb-6">
            ${product?.price.toFixed(2)}
          </div>
          <p className="text-muted-foreground mb-6">{product?.description}</p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        <div className="space-y-2">
          {product?.reviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>
      </div>
    </main>
  );
}
