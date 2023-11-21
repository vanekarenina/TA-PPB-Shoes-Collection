import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import shoeList from './shoeList.json'; // Assuming shoeList.json is in the same directory
import './Details.css';


const Details = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const { brand, productId } = useParams();

  useEffect(() => {
    if (brand && productId) {
      const brandProducts = shoeList[brand];
      if (brandProducts) {
        const productDetails = Object.values(brandProducts).find(p => p.id === parseInt(productId, 10));
        if (productDetails) {
          setProduct(productDetails);
          setLoading(false);
        }
      }
    }
  }, [brand, productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="detail-container">
      <img src={product.image} alt={product.name} width="400px" />
      <h1 className="detail-txt">{product.name}</h1>
      <h3 className="detail-txt">{convertToRupiah(product.price)}</h3>
      <p className="detail-txt">Description:<br />{product.description}</p>

    </div>
  );
};

const convertToRupiah = (price) => {
  const priceInRupiah = price * 1000;
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(priceInRupiah);
};

export default Details;
