import "./Products.css";

function Products() {
  let name = "arvind";
  return (
    <div className="Products">
      <h3>I am the Title</h3>
      <h3>2+2 equals to: {2 + 2}</h3>
      <h3>{name.toUpperCase()} </h3>
    </div>
  );
}

export default Products;
