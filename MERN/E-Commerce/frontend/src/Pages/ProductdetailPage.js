import React from "react";
import Navbar from "../features/navBar/Navbar";
import ProductDetail from "../features/product-list/components/ProductDetail";

function ProductDetailPage() {
  return (
    <div>
      <Navbar>
        <ProductDetail />
      </Navbar>
    </div>
  );
}

export default ProductDetailPage;
