// src/components/products/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={product.image || '/placeholder-crop.jpg'} 
        alt={product.cropName} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.cropName}</h3>
        <p className="text-gray-600 mb-2">
          {product.description && product.description.substring(0, 100)}
          {product.description && product.description.length > 100 ? '...' : ''}
        </p>
        <p className="text-lg font-bold mb-2">
          ${product.price ? product.price.toFixed(2) : '0.00'} / {product.unit}
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Available until: {product.availableUntil ? new Date(product.availableUntil).toLocaleDateString() : 'N/A'}
        </p>
        <Link 
          to={`/products/${product._id}`} 
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductCard;
