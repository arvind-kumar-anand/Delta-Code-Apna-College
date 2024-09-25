import "./App.css";
// import Title from "./Title.jsx";
import Hello from "./Hello.jsx";
import ProductTab from "./ProductTab.jsx";

// export default function Description() {
//   return <p>I am the Description</p>;
// }

export default function App() {
  return (
    <div>
      <ProductTab />
      {/* <Hello /> */}

      <ProductTab />
      {/* <Hello /> */}

      <ProductTab />
      {/* <Hello /> */}
    </div>

    //ALSO CAN BE USED
    // <>
    //   <Title />
    //   <Description />
    //   <Description2 />
    // </>
  );
}

