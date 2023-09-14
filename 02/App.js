// object array, condtional styles

import React, { useState } from "react";

const App = () => {
  const [data, UpdateData] = useState([]);

  const [name, updateName] = useState("");
  const [age, updateAge] = useState(0);
  const [titles, updateTitles] = useState(0);

  const changeTheName = (e) => {
    updateName(e.target.value);
  };
  const changeTheAge = (e) => {
    updateAge(e.target.value);
  };
  const changeTheTitles = (e) => {
    updateTitles(e.target.value);
  };

  const addData = () => {
    UpdateData([...data, { name, age, titles }]);

    // data can be change by updateData
    // updateData, firstly create an empty []
    // second step, copy all previous data ...data
    // third step, add an new object {name, age, titles}
  };

  const removeData = (i) => {
    console.log(i);

    // let currentObj = data.find(x=>x.name === i)
    // console.log(currentObj)

    // let newArr = data.filter( x=> x.name !== i );
    // console.log(newArr)

    // steps:
    // use the filter function, that returns array.
    // filter -> array -> iterate
    // name === i return an array, have an object (name === i)
    // name !== i return an array, have all object except name === i

    UpdateData(data.filter((x) => x.name !== i));
  };

  // if(name === 'abbas') {
  //   backgroundColor : 'red'
  // }

  // name === 'abbas' && backgroundColor : 'red'

  return (
    <div>
      <input
        placeholder="Enter the wrestler's name"
        value={name}
        onChange={changeTheName}
      />
      <input
        placeholder="Enter the wrestler's age"
        value={age}
        onChange={changeTheAge}
      />
      <input
        placeholder="Enter the wrestler's titles"
        value={titles}
        onChange={changeTheTitles}
      />
      <button onClick={addData}>Add data</button>

      {data.map((x, index) => (
        <p
          key={index}
          style={{ backgroundColor: `${x.name === "abbas" && "red"}` }}
        >
          name: {x.name} ,age : {x.age}, titles : {x.titles} -{" "}
          <button onClick={() => removeData(x.name)}>remove</button>
        </p>
      ))}
    </div>
  );
};

export default App;
