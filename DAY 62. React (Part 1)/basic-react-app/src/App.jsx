import "./App.css";
// import Title from "./Title.jsx";
import Hello from "./Hello.jsx";
import ProductTab from "./ProductTab.jsx";

// function Description() {
//   return <p>I am the Description</p>;
// }

function App() {
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

export default App;
