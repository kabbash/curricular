import React from 'react';

import { StarRating } from "./star-rating"

interface ReviewCardProps {
  name: string
  rating: number
  comment: string
  date: string
}

export function ReviewCard({ name, rating, comment, date }: ReviewCardProps) {
  return (
    <div className="border-b py-4">
      <div className="flex items-center justify-between mb-2">
        <div className="font-semibold">{name}</div>
        <time className="text-sm text-muted-foreground">{date}</time>
      </div>
      <StarRating rating={rating} />
      <p className="mt-2 text-muted-foreground">{comment}</p>
    </div>
  )
}

