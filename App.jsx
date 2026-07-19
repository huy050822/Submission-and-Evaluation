import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList'; // Đảm bảo đã import component này

function App() {
  // Thêm state để quản lý việc hiển thị danh sách sản phẩm
  const [showProductList, setShowProductList] = useState(false);

  // Hàm xử lý khi nhấn nút "Get Started"
  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="landing-page-container">
      {!showProductList ? (
        <div className="landing-content">
          <h1>Paradise Nursery</h1>
          <p>Welcome to the greenest place on earth!</p>
          <button onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
