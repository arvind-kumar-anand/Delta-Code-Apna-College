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
  // let [fullName, setfullName] = useState("");
  // let [username, setuUername] = useState("");

  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  // let handleFullName = (event) => {
  //   // console.log(event.target.value);
  //   setfullName(event.target.value);
  // };

  // let handleUsername = (event) => {
  //   // console.log(event.target.value);
  //   setuUername(event.target.value);
  // };

  let handleAllChange = (event) => {
    // let fieldName = event.target.name;
    // let newValue = event.target.value;

    setFormData((currData) => {
      // currData[fieldName] = newValue;
      // return { ...currData };
      //OR
      // return { ...currData, [fieldName]: newValue };
      //OR
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleDefault = (event) => {
    event.preventDefault();
    console.log(formData); // You can check form data here or handle submit action
    setFormData({
      fullName: "",
      username: "",
      password: "",
    });
  };

  return (
    <div>
      <h1>Hello User</h1>

      <form onSubmit={handleDefault}>
        <label htmlFor="fullName">Full Name</label> &nbsp;
        <input
          placeholder="Enter Full Name"
          type="text"
          value={formData.fullName}
          // onChange={handleFullName}
          onChange={handleAllChange}
          id="fullName"
          name="fullName"
        />
        <br /> <br />
        <label htmlFor="username">Username</label> &nbsp;
        <input
          placeholder="Enter Username"
          type="text"
          value={formData.username}
          // onChange={handleUsername}
          onChange={handleAllChange}
          id="username"
          name="username"
        />
        <br /> <br />
        <label htmlFor="password">password</label> &nbsp;
        <input
          placeholder="Enter password"
          type="password"
          value={formData.password}
          // onChange={handleUsername}
          onChange={handleAllChange}
          id="password"
          name="password"
        />
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
