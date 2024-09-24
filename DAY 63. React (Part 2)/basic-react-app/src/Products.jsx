import "./Products.css";

// LECTURE 1,2,3
// function Products({ title, price, features1 }) {
//   // console.log(probs);
//   // console.log(probs.title);

//   return (
//     <div className="Products">
//       <h3>{title}</h3>
//       <p>It's price is {price}</p>
//       <p>
//         {features1.map((feature) => (
//           <li>{feature}</li>
//         ))}
//       </p>
//     </div>
//   );
// }

//04. Conditionals
function Products({ title, price }) {
  return (
    <div className="Products">
      <h3>{title}</h3>
      <p>It's price is {price}</p>
      {price > 20000 ? <p>discount of 5%</p> : <null />}
      {/* {price > 20000 && <p>discount of 5%</p>} */}
    </div>
  );
}

export default Products;
