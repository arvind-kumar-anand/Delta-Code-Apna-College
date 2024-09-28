import { useState } from "react";

// (05).Hooks
// export default function Counter() {
//   let count = 0;
//   function incount() {
//     count += 1;
//     console.log(count);
//   }

//   return (
//     <div>
//       {/* <h3>count={count}</h3> */}
//       {/* <button onClick={incount}>Count</button> */}
//     </div>
//   );
// }

// (06).useState()
// export default function Counter() {
//   // let arr = useState(0);
//   // console.log(arr);
//   let [count, setCount] = useState(0);
//   let incount = () => {
//     // count += 1;
//     setCount(count + 1);
//     console.log(count);
//   };

//   return (
//     <div>
//       <h3>Count={count}</h3>
//       <button onClick={incount}>Count</button>
//     </div>
//   );
// }

// 09. Re-render _ How does it work_
// export default function Counter() {
//   let [count, setCount] = useState(0);
//   console.log("component is re-executed");
//   console.log(`count = ${count}`);

//   let incount = () => {
//     setCount(count + 1);
//     console.log(`new value of count = ${count}`);
//   };

//   return (
//     <div>
//       <h3>Count={count}</h3>
//       <button onClick={incount}>Count</button>
//     </div>
//   );
// }

// 10. Callback in Set State Function
// export default function Counter() {
//   let [count, setCount] = useState(0);

//   let incount = () => {
//     setCount((curreCount) => {
//       return curreCount + 1;
//     });
//     setCount((curreCount) => {
//       return curreCount + 1;
//     });
//     setCount((curreCount) => {
//       return curreCount + 1;
//     });

//     //THIS WILL WORK ONLY ONCE
//     // setCount(count + 2);
//     // setCount(count + 2);
//     // setCount(count + 2);
//     // setCount(count + 2);
//   };

//   return (
//     <div>
//       <h3>Count={count}</h3>
//       <button onClick={incount}>Count</button>
//     </div>
//   );
// }

// 11. More about State

function init() {
  console.log("Init was executed");
  return Math.random();
}
export default function Counter() {
  //   let [count, setCount] = useState(0);
  //   let [count, setCount] = useState(init()); // NEVER WRITE LIKE THIE
  let [count, setCount] = useState(init); // WRITE LIKE THIE
  console.log("component is re-executed"); //ONLU 1-2 TIMES EXECUTION

  let incount = () => {
    setCount((curreCount) => {
      return curreCount + 1;
    });
    setCount((curreCount) => {
      return curreCount + 1;
    });
    setCount((curreCount) => {
      return curreCount + 1;
    });

    //THIS WILL WORK ONLY ONCE AND WILL RE-RENDER ONCE BECAUSE NO CHANGE IN STATE
    // setCount(20);
  };

  return (
    <div>
      <h3>Count={count}</h3>
      <button onClick={incount}>Count</button>
    </div>
  );
}
