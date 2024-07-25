import React from 'react';

const Products = ({ onLogout }) => {
  const products = [
    { id: 1, name: 'Product 1', stockStatus: 'In Stock' },
    { id: 2, name: 'Product 2', stockStatus: 'Out of Stock' },
    { id: 3, name: 'Product 3', stockStatus: 'In Stock' },
    { id: 4, name: 'Product 3', stockStatus: 'Out of Stock' }
  ];

  return (
    <div className="card mx-auto" style={{ maxWidth: '600px', padding: '20px' }}>
      <h2 className="card-title text-center">Products</h2>
      <button onClick={onLogout} className="btn btn-info w-100 mb-3">Logout</button>
      <ul className="list-group">
        {products.map(product => (
          <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
            {product.name}
            <span className={`badge ${product.stockStatus === 'In Stock' ? 'bg-primary' : 'bg-info'}`}>
              {product.stockStatus}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
