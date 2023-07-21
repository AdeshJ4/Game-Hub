import { useEffect, useState } from "react";

const ProductList = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    console.log("Fetching Product");
    setProduct(["Apple", "Banana"]);
  }, []);

  return (
    <>
      <h1>Product List</h1>
      <ul>
        {product.map((prod) => {
          return <li key={prod}>{prod}</li>;
        })}
      </ul>
    </>
  );
};

const Compo2 = () => {
    const [category, setCategory] = useState('');
  return (
    <>
      <select className="form-select" onChange={(event)=>setCategory(event.target.value)}>
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      
      <ProductList />
    </>
  );
};

export default Compo2;
