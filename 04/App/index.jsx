import React, { useEffect, useState } from "react";
import MyForm from "./components/MyForm";
import UsersList from "./components/UsersList";

const initialValues = {
  name: "",
  age: 0,
  status: "",
};

const App = () => {
  const [formData, setFormData] = React.useState(initialValues);

  const gettingDataFromLS = () => {
    let dataFromLS = localStorage.getItem("data");
    console.log(dataFromLS, "from getting func");
    if (dataFromLS) return JSON.parse(dataFromLS);
    else {
      return [];
    }
  };

  const [users, setUsers] = useState(gettingDataFromLS);

  const updateValues = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addUser = (values) => {
    // console.log(values, "here is the values comming from form");

    let tempUser = {
      ...values,
      id: new Date(),
      bgcolor: "",
    };
    console.log(tempUser, "here is the values comming from form");

    // setUsers -> users
    // [], [...users, {}]

    setUsers([...users, tempUser]);

    console.log(users, "from add user func");
  };

  const removeItem = (id) => {
    setUsers(users.filter((x) => x.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(users));
  }, [users]);

  const blueColor = (id) => {
    // console.log(id)

    let newUsers = users.map((user) => {
      return user.id === id ? { ...user, bgcolor: "orange" } : user;
    });

    setUsers(newUsers);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <MyForm
        formData={formData}
        updateValues={updateValues}
        addUser={addUser}
      />
      {users.length > 0 ? (
        <UsersList
          users={users}
          removeItem={removeItem}
          blueColor={blueColor}
        />
      ) : (
        "No users at the moment"
      )}
    </div>
  );
};

export default App;
