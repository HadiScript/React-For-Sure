import React from "react";

const MyForm = ({ formData, updateValues, addUser }) => {
  return (
    <div>
      <input
        value={formData.name}
        name="name"
        onChange={updateValues}
        placeholder="Enter your name"
      />
      <input
        value={formData.age}
        name="age"
        onChange={updateValues}
        placeholder="Enter your age"
      />
      <input
        value={formData.status}
        name="status"
        onChange={updateValues}
        placeholder="Your status please"
      />
      <button onClick={() => addUser(formData)}>submit</button>
    </div>
  );
};

export default MyForm;
