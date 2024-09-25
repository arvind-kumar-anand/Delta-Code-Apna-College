import "./Products.css";
import Price from "./price.jsx";

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
// function Products({ title, price }) {
//   return (
//     <div className="Products">
//       <h3>{title}</h3>
//       <p>It's price is {price}</p>
//       {price > 20000 ? <p>discount of 5%</p> : <null />}
//       {/* {price > 20000 && <p>discount of 5%</p>} */}
//     </div>
//   );
// }

// 05. Dynamic Component Styling
// function Products({ title, price }) {
//   let isDiscount = price > 20000;
//   let styles = { backgroundColor: isDiscount ? "gold" : "" };
//   return (
//     <div className="Products" style={styles}>
//       <h3>{title}</h3>
//       <p>It's price is {price}</p>
//       {isDiscount ? <p>discount of 5%</p> : <null />}
//     </div>
//   );
// }

// 08. Activity _ Amazon Cards
function Products({ title, idx }) {
  let oldPrice = [200, 300, 400, 500];
  let newPrice = [600, 700, 800, 900];
  let descriptions = [
    "This is a sleek and durable mobile phone with excellent battery life.",
    "The laptop offers high performance with a crisp display and fast processing.",
    "This charger is compact, portable, and ensures fast charging for all devices.",
    "A lightweight, user-friendly tablet, perfect for both work and entertainment.",
  ];
  return (
    <div className="Products">
      <h2>{title}</h2>
      <p>{descriptions[idx]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}

export default Products;
// {
//   title, price, description;
// }
