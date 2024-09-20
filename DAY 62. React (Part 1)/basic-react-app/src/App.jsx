import "./App.css";
import Title from "./Title.jsx";
import Hello from "./Hello.jsx";

function Description() {
  return <p>I am the Description</p>;
}

function App() {
  return (
    <div>
      <Title />
      <Description />
      <Hello />
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
