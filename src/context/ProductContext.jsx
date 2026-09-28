import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

const API_URL = 'https://6aa2fdfbccb3db9689a731bf.mockapi.io/products';

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem('modeva_products');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [loading, setLoading] = useState(true);

  // ALWAYS send a GET request on mount so 'products' always appears in DevTools Network Tab
  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const withIds = data.map((item, index) => ({
            ...item,
            id: item.id !== undefined && item.id !== null ? String(item.id) : `prod-${index + 1}`,
          }));
          setProducts(withIds);
          localStorage.setItem('modeva_products', JSON.stringify(withIds));
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products from API:', err);
        // Fallback to localStorage if API is unreachable
        const saved = localStorage.getItem('modeva_products');
        if (saved) {
          try {
            setProducts(JSON.parse(saved));
          } catch (e) {}
        }
        setLoading(false);
      });
  }, []);

  // Add Product (Sends real POST request to API)
  const addProduct = (productData) => {
    const newId = Date.now().toString();
    const newProduct = {
      ...productData,
      id: newId,
      rating: '4.95',
    };

    // 1. Instant UI update
    const updated = [newProduct, ...products];
    setProducts(updated);
    localStorage.setItem('modeva_products', JSON.stringify(updated));

    // 2. Real POST request visible in Network tab
    const apiPayload = {
      name: productData.name,
      category: productData.category,
      price: productData.price,
      rating: '4.95',
      // Send a safe URL to MockAPI to prevent 413 Payload Too Large on Base64
      image: productData.image?.startsWith('data:')
        ? 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600'
        : productData.image,
    };

    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(apiPayload),
    })
      .then((res) => res.json())
      .then((resData) => console.log('POST /products success:', resData))
      .catch((err) => console.log('POST /products notice:', err));
  };

  // Update Product (Sends real PUT request to API)
  const updateProduct = (id, updatedData) => {
    // 1. Instant UI update
    const updated = products.map((p) =>
      String(p.id) === String(id) ? { ...p, ...updatedData } : p
    );
    setProducts(updated);
    localStorage.setItem('modeva_products', JSON.stringify(updated));

    // 2. Real PUT request visible in Network tab
    const apiPayload = {
      name: updatedData.name,
      category: updatedData.category,
      price: updatedData.price,
      image: updatedData.image?.startsWith('data:')
        ? 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600'
        : updatedData.image,
    };

    fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(apiPayload),
    })
      .then((res) => res.json())
      .then((resData) => console.log(`PUT /products/${id} success:`, resData))
      .catch((err) => console.log(`PUT /products/${id} notice:`, err));
  };

  // Delete Product (Sends real DELETE request to API)
  const deleteProduct = (id) => {
    // 1. Instant UI update
    const updated = products.filter((p) => String(p.id) !== String(id));
    setProducts(updated);
    localStorage.setItem('modeva_products', JSON.stringify(updated));

    // 2. Real DELETE request visible in Network tab
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((resData) => console.log(`DELETE /products/${id} success:`, resData))
      .catch((err) => console.log(`DELETE /products/${id} notice:`, err));
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        addProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}
