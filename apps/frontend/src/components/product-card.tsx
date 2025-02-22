import React from 'react';
import { Link } from 'react-router-dom';
import { StarRating } from './star-rating';

export interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  price: number;
}

export function ProductCard({
  id,
  name,
  image,
  rating,
  reviewCount,
  price,
}: ProductCardProps) {
  return (
    <Link to={`/products/${id}`}>
      <div className="group rounded-lg border bg-card text-card-foreground shadow-sm transition-colors hover:border-primary">
        <div className="relative aspect-square">
          <img
            src={image || '/placeholder.svg'}
            alt={name}
            className="object-cover w-full h-full rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold tracking-tight text-lg group-hover:text-primary">
            {name}
          </h3>
          <div className="flex items-center gap-2 mt-2">
            <StarRating rating={rating} />
            <span className="text-sm text-muted-foreground">
              ({reviewCount} reviews)
            </span>
          </div>
          <div className="mt-2 font-semibold">${price.toFixed(2)}</div>
        </div>
      </div>
    </Link>
  );
}
