import React, { useState } from "react";

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

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
      username: "",
      remarks: "",
      rating: 5,
    });
  };

  return (
    <div>
      <h1>Give a comment</h1>
      <form onSubmit={handleDefault}>
        <label htmlFor="username">Username</label> &nbsp; &nbsp;
        <input
          type="text"
          placeholder="username"
          value={formData.username}
          onChange={handleAllChange}
          id="username"
          name="username"
        />
        <br />
        <br />
        <label htmlFor="remarks">Add Your Remarks</label> &nbsp;&nbsp;
        <textarea
          placeholder="Write Your Remarks"
          value={formData.remarks}
          onChange={handleAllChange}
          id="remarks"
          name="remarks"
        />
        <br />
        <br />
        <label htmlFor="rating">Rate</label> &nbsp;
        <input
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleAllChange}
          id="rating"
          name="rating"
        />
        <br />
        <br />
        <button>Add a Comment</button>
      </form>
    </div>
  );
}
