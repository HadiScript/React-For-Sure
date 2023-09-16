import React from "react";

const UsersList = ({ users, removeItem, blueColor }) => {
  return (
    <div style={{ marginTop: "30px" }}>
      {users.map((x) => (
        <div
          key={x.id}
          style={{
            backgroundColor: x.bgcolor,
            marginBottom: "5px",
            padding: "3px",
            borderRadius: "10px",
          }}
        >
          {x.name} - {x.age} - {x.status} -
          <span
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => removeItem(x.id)}
          >
            remove
          </span>
          <span
            style={{ color: "green", cursor: "pointer", marginLeft: "5px" }}
          >
            green
          </span>
          <span
            style={{ color: "blue", cursor: "pointer", marginLeft: "5px" }}
            onClick={() => blueColor(x.id)}
          >
            blue
          </span>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
