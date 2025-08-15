import React from 'react';
import { formatCurrency } from '../utilities/helpers';

interface ProductCardProps {
  name: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price }) => {
  return (
    <div className="border rounded-lg shadow p-4 flex justify-between items-center">
      <span className="font-medium">{name}</span>
      <span className="font-semibold text-green-600">{formatCurrency(price)}</span>
    </div>
  );
};

export default ProductCard;
