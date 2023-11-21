import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AirJordan.css";

const AirJordan = () => {
  // Assume the products data is available as a local JSON import
  const productsData = require('./shoeList.json').airjordan;

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // Set the page size to 10

  const indexOfLastProduct = currentPage * pageSize;
  const indexOfFirstProduct = indexOfLastProduct - pageSize;
  const currentProducts = Object.entries(productsData)
    .slice(indexOfFirstProduct, indexOfLastProduct)
    .map(entry => ({ id: entry[0], ...entry[1] }));

  const totalPages = Math.ceil(Object.keys(productsData).length / pageSize);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const convertToRupiah = (price) => {
    const priceInRupiah = price * 1000;
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(priceInRupiah);
  };

  return (
    <div className="airjordan-container">
      {currentProducts.map((product, index) => (
        <div className="col-3 mb-4" key={index}>
          <Link to={`/Details/airjordan/${product.id}`}>
            <div className="airjordan-grid">
              <img className="airjordan-img" src={product.image} alt={product.name} />
              <p className="airjordan-name">{product.name}</p>
              <p className="airjordan-price">{convertToRupiah(product.price)}</p>
            </div>
          </Link>
        </div>
      ))}
      {/* <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={pageNumber === currentPage ? 'active' : ''}
          >
            {pageNumber}
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default AirJordan;
