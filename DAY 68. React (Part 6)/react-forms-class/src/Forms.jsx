import React, { useState } from "react";

//  01. Forms in React
// export default function Forms() {
//   let [fullName, setfullName] = useState("Arvind");
//   let handleChange = (event) => {
//     // console.log(event.target.value);
//     setfullName(event.target.value);
//   };
//   return (
//     <div>
//       <h1>Hello Arvind!</h1>
//       <form action="">
//         <input
//           placeholder="enter your name"
//           type="text"
//           value={fullName}
//           onChange={handleChange}
//         />
//         <button type="submit"></button>
//       </form>
//     </div>
//   );
// }

//  02. Labels in React
// export default function Forms() {
//   let [fullName, setfullName] = useState("Arvind");
//   let handleChange = (event) => {
//     // console.log(event.target.value);
//     setfullName(event.target.value);
//   };
//   return (
//     <div>
//       <h1>Hello Arvind!</h1>
//       <label htmlFor="username"></label>
//       <form action="">
//         <input
//           placeholder="enter your name"
//           type="text"
//           value={fullName}
//           onChange={handleChange}
//           id="username"
//         />
//         <button type="submit"></button>
//       </form>
//     </div>
//   );
// }

//  03. Handling Multiple Inputs
export default function Forms() {
  let [fullName, setfullName] = useState("");
  let [username, setusername] = useState("");
  let handleChange = (event) => {
    // console.log(event.target.value);
    setfullName(event.target.value);
  };
  return (
    <div>
      <h1>Hello Arvind!</h1>
      <label htmlFor="username">Full Name</label>
      <form action="">
        <input
          placeholder="enter your name"
          type="text"
          value={fullName}
          onChange={handleChange}
          id="username"
        />
        <button type="submit"></button>
      </form>
    </div>
  );
}
