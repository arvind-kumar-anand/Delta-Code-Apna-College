import "./App.css";
// import Title from "./Title.jsx";
// import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";

function App() {
  return (
    <div>
      {/* <ProductTab /> */}
      <MsgBox userName="Arvind" textColor="gold" />
      <MsgBox userName="Kitty" textColor="pink" />
      <MsgBox userName="Raghu" textColor="blue" />
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