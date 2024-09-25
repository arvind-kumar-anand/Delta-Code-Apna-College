import Products from "./Products.jsx";

// LECTURE 1,2,3
// export default function ProductTab() {
//   let option1 = ["tech", "durable", "cheap"];
//   // let option1 = [<li>tech</li>, <li>durable</li>, <li>cheap</li>];
//   // let option2 = { a: "service", b: "capability", c: "Resolution" };
//   return (
//     <div>
//       <Products title="mobile" price={20000} features1={option1} />
//       <Products title="laptop" price={40000} />
//       <Products title="charger" price={20} />
//     </div>
//   );
// }

//04. Conditionals
// export default function ProductTab() {
//   return (
//     <div>
//       <Products title="mobile" price={20000} />
//       <Products title="laptop" price={40000} />
//       <Products title="charger" price={20} />
//     </div>
//   );
// }

// 05. Dynamic Component Styling
// export default function ProductTab() {
//   return (
//     <div>
//       <Products title="mobile" price={20000} />
//       <Products title="laptop" price={40000} />
//       <Products title="charger" price={20} />
//     </div>
//   );
// }

// 08. Activity _ Amazon Cards
export default function ProductTab() {
  let styles = {
    display: "flex",
    fleWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={styles}>
      <Products title="Mobile Phone" idx={0} />
      <Products title="Laptop" idx={1} />
      <Products title="Charger" idx={2} />
      <Products title="Tablet" idx={3} />
    </div>
  );
}
