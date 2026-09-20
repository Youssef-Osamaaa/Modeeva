import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem('modeva_products');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [loading, setLoading] = useState(() => {
    return !localStorage.getItem('modeva_products');
  });

  useEffect(() => {
    const saved = localStorage.getItem('modeva_products');
    if (!saved || JSON.parse(saved).length === 0) {
      fetch('https://6aa2fdfbccb3db9689a731bf.mockapi.io/products')
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
          console.error('Error fetching products:', err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

    const addProduct = (productData) => {
    const newProduct = {
      ...productData,
      id: Date.now().toString(),
      rating: '4.95',
    };
    const updated = [newProduct, ...products];
    setProducts(updated);
    localStorage.setItem('modeva_products', JSON.stringify(updated));
  };

  const updateProduct = (id, updatedData) => {
    const updated = products.map((p) =>
      String(p.id) === String(id) ? { ...p, ...updatedData } : p
    );
    setProducts(updated);
    localStorage.setItem('modeva_products', JSON.stringify(updated));
  };

  const deleteProduct = (id) => {
    const updated = products.filter((p) => String(p.id) !== String(id));
    setProducts(updated);
    localStorage.setItem('modeva_products', JSON.stringify(updated));
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

