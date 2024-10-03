import React, { useState, useEffect } from "react";

//  05. useEffect( )
// export default function Counter() {
//   let [count, setCount] = useState(0);
//   let handleCount = () => {
//     setCount(count + 1);
//   };

//   useEffect(function printSomething() {
//     console.log("this is side effect");
//   });
//   return (
//     <div>
//       <h1>Count={count}</h1>
//       <button onClick={handleCount}>+1</button>
//     </div>
//   );
// }

//  06. Dependencies in useEffect( )
// export default function Counter() {
//   let [countx, setCountx] = useState(0);
//   let handleCountx = () => {
//     setCountx(countx + 1);
//   };

//   let [county, setCounty] = useState(0);
//   let handleCounty = () => {
//     setCounty(county + 1);
//   };

//   useEffect(
//     function printSomething() {
//       console.log("this is side effect");
//     },
//     // [countx] ////ONLY COUNTY
//     // [county] //ONLY COUNTX
//     [(countx, county)] //BOTH
//     // [] => ONLY RENDERING TIME
//   );
//   return (
//     <div>
//       <h1>Count={countx}</h1>
//       <button onClick={handleCountx}>+1</button>
//       <h1>Count={county}</h1>
//       <button onClick={handleCounty}>+1</button>
//     </div>
//   );
// }
