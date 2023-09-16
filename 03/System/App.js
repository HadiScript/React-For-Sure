// import React, { useEffect, useState } from "react";

// const App = () => {
//   let name = "hadi";
//   let token = "asdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadgasf";

//   const [user, setUser] = useState(JSON.parse(localStorage.getItem("data")));

//   useEffect(() => {
//     // localStorage.setItem('name', value )
//     // localStorage.setItem("data", JSON.stringify({ name, token }));
//   }, []);

//   // geting data from localstorage;
//   // 1_get data 2_ JSON prase

//   return <div>parent - {user.name}</div>;
// };

// export default App;

import React, { useEffect, useState } from "react";

const App = () => {
  function getingDataFromLocalStorage() {
    let dataFromLS = localStorage.getItem("data");
    if (dataFromLS) return JSON.parse(dataFromLS);
    else {
      return [];
    }
  }

  const [data, setData] = useState(getingDataFromLocalStorage);

  const addItems = () => {
    setData([...data, { name: "hadi" + new Date() }]);
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <div>
      <h2> Data </h2>
      <button onClick={addItems}>Add Items</button>
      <hr />
      {data.map((x) => (
        <p>{x.name}</p>
      ))}
    </div>
  );
};

export default App;
