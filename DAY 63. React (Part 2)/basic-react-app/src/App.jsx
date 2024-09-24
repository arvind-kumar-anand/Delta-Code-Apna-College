import "./App.css";
// import Title from "./Title.jsx";
// import ProductTab from "./ProductTab.jsx";
import MsgBoxs from "./MsgBoxs.jsx";

function App() {
  return (
    <div>
      {/* <ProductTab /> */}
      <MsgBoxs userName="Arvind" textColor="gold" />
      <MsgBoxs userName="Kitty" textColor="pink" />
      <MsgBoxs userName="Raghu" textColor="blue" />
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