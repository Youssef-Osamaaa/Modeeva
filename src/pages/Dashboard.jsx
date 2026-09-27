import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useProducts } from '../context/ProductContext';
import './Dashboard.css';

function Dashboard() {
  const { products, loading, addProduct, updateProduct, deleteProduct } = useProducts();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: 'Women',
    price: '',
    image: '',
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        Swal.fire({
          title: 'Image too large',
          text: 'Please select an image smaller than 2MB.',
          icon: 'warning',
          confirmButtonColor: '#0b7c7e',
        });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOpenAdd = () => {
    setEditingProduct(null);
    setFormData({
      name: '',
      category: 'Women',
      price: '$150.000',
      image: '',
    });
    setIsFormOpen(true);
  };

  const handleOpenEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price,
      image: product.image,
    });
    setIsFormOpen(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0b7c7e',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id);

        Swal.fire({
          title: 'Deleted!',
          text: 'Product has been deleted.',
          icon: 'success',
          confirmButtonColor: '#0b7c7e',
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.image) {
      Swal.fire({
        title: 'Image Required',
        text: 'Please select an image file from your PC.',
        icon: 'warning',
        confirmButtonColor: '#0b7c7e',
      });
      return;
    }

    if (editingProduct) {
      updateProduct(editingProduct.id, formData);

      Swal.fire({
        title: 'Updated!',
        text: 'Product updated successfully.',
        icon: 'success',
        confirmButtonColor: '#0b7c7e',
        timer: 1500,
        showConfirmButton: false,
      });
    } else {
      addProduct(formData);

      Swal.fire({
        title: 'Added!',
        text: 'New product added successfully.',
        icon: 'success',
        confirmButtonColor: '#0b7c7e',
        timer: 1500,
        showConfirmButton: false,
      });
    }

    setIsFormOpen(false);
  };

  return (
    <div className="simple-dashboard">
      {/* Top Navigation */}
      <header className="dash-header">
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/" className="dash-logo">
            <span className="logo-teal">M</span>ODEVA
            <span className="dash-tag">Dashboard</span>
          </Link>
          <Link to="/" className="btn-back">
            <i className="bi bi-arrow-left me-1"></i> Back to Store
          </Link>
        </div>
      </header>

      {/* Main Body */}
      <main className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="dash-title">Products Management</h2>
            <p className="text-muted small mb-0">Add, edit, or remove products from the store catalog.</p>
          </div>
          <button className="btn-add" onClick={handleOpenAdd}>
            <i className="bi bi-plus-lg me-1"></i> Add Product
          </button>
        </div>

        {/* Modal / Form */}
        {isFormOpen && (
          <div className="modal-backdrop-custom">
            <div className="modal-box">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="m-0">{editingProduct ? 'Edit Product' : 'Add New Product'}</h4>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsFormOpen(false)}
                ></button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Product Name</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Elegant Silk Dress"
                  />
                </div>

                <div className="row mb-3">
                  <div className="col-6">
                    <label className="form-label">Category</label>
                    <select
                      className="form-select"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                      <option value="Women">Women</option>
                      <option value="Men">Men</option>
                    </select>
                  </div>
                  <div className="col-6">
                    <label className="form-label">Price</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      placeholder="$250.000"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Product Image (Upload from PC)</label>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    required={!formData.image}
                    onChange={handleImageChange}
                  />
                  {formData.image && (
                    <div className="mt-2 d-flex align-items-center gap-3 p-2 bg-light rounded border">
                      <img
                        src={formData.image}
                        alt="Preview"
                        className="product-preview-img"
                      />
                      <div>
                        <p className="mb-0 small fw-bold text-success">
                          <i className="bi bi-check-circle me-1"></i> Image Selected
                        </p>
                        <span className="text-muted small">
                          {editingProduct ? 'Choose a new file to change this image' : 'Ready to save'}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="d-flex justify-content-end gap-2">
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => setIsFormOpen(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn-save">
                    {editingProduct ? 'Update Product' : 'Add Product'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Products Table */}
        <div className="table-card">
          {loading ? (
            <div className="p-5 text-center text-muted">Loading products...</div>
          ) : products.length === 0 ? (
            <div className="p-5 text-center text-muted">No products found. Click "Add Product" above to create one.</div>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td style={{ width: '80px' }}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="product-img"
                        />
                      </td>
                      <td>
                        <strong>{product.name}</strong>
                      </td>
                      <td>
                        <span className="badge-category">{product.category}</span>
                      </td>
                      <td>{product.price}</td>
                      <td className="text-end">
                        <button
                          className="btn-action btn-edit me-2"
                          title="Edit"
                          onClick={() => handleOpenEdit(product)}
                        >
                          <i className="bi bi-pencil"></i> Edit
                        </button>
                        <button
                          className="btn-action btn-delete"
                          title="Delete"
                          onClick={() => handleDelete(product.id)}
                        >
                          <i className="bi bi-trash"></i> Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
