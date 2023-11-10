import React, { useState } from "react";

const CreateProductForm = () => {
  // state for formData
  const [formData, setFormData] = useState({
    brand: "",
    category: "",
    description: "",
    discountedPercentage: "",
    price: "",
    rating: "",
    stock: "",
    thumbnail: "",
    title: "",
  });

  // handleChange
  const handleChange = (e) => {
    // access name and value for respective input
    const name = e.target.name;
    const value = e.target.value;

    // update formData using dynamic object properties
    setFormData({ ...formData, [name]: value });
  };

  // POST new Product
  const postProduct = (productToPost) => {
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(productToPost),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // handleFormSubmission
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log(formData);

    // !only post when form has been filled
    if (formData) {
      // post new product
      postProduct(formData);
    }
  };
  return (
    <form onSubmit={(e) => handleFormSubmission(e)}>
      <h2>Add Product</h2>
      <input
        type="text"
        name="brand"
        value={formData.brand}
        onChange={(e) => handleChange(e)}
        placeholder="Brand"
      />
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={(e) => handleChange(e)}
        placeholder="Category"
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={(e) => handleChange(e)}
        placeholder="Description"
      />
      <input
        type="number"
        name="discountedPercentage"
        value={formData.discountedPercentage}
        placeholder="Discount"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={(e) => handleChange(e)}
        placeholder="Price"
      />
      <input
        type="number"
        name="rating"
        value={formData.rating}
        onChange={(e) => handleChange(e)}
        placeholder="Rating"
      />
      <input
        type="number"
        name="stock"
        value={formData.stock}
        onChange={(e) => handleChange(e)}
        placeholder="Stock"
      />
      <input
        type="url"
        name="thumbnail"
        value={formData.thumbnail}
        onChange={(e) => handleChange(e)}
        placeholder="Image"
      />
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={(e) => handleChange(e)}
        placeholder="title"
      />
      <br />
      <br />

      <input type="submit" />
    </form>
  );
};

export default CreateProductForm;
