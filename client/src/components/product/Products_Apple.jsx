import { useEffect, useState } from "react";
import styled from "styled-components";
import ProductApple from "./ProductApple";
import axios from "axios";

const Container = styled.div`
  margin: 0px 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products_Apple = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // hiển thị danh mục sản phẩm theo category laptop
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products?category=laptop"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => (
            <ProductApple item={item} key={item.id} />
          ))
        : products
            .slice(0, 8)
            .map((item) => <ProductApple item={item} key={item.id} />)}
    </Container>
  );
};

export default Products_Apple;
