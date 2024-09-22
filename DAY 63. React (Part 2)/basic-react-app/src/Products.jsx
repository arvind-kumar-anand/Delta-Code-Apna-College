import "./Products.css";

// function Products({ title, price=1 }) { //DEFAULT VALUE
function Products({ title, price }) {
  // console.log(probs);
  // console.log(probs.title);
  let name = "arvind";
  let options = ["tech", "durable", ""];
  return (
    <div className="Products">
      {/* <h3>{probs.title}</h3> */}
      <h3>{title}</h3>
      <h3>Price is Rs. {price}</h3>
    </div>
  );
}

export default Products;
