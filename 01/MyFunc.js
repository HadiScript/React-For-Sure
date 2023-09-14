import { useState } from "react";

export const MyButton = () => <button>Click me</button>;

const MyFunction = () => {
  let oldA = [1, 2, 3];

  let [a, setA] = useState(oldA);

  const ChangeTheA = () => {
    setA([...a, 4]);
  };

  // filter
  // find
  // findIndex

  return (
    <div>
      {a.map((x) => (
        <h5>{x}</h5>
      ))}
      <button
        id="myBtn"
        style={{ backgroundColor: "purple" }}
        onClick={ChangeTheA}
      >
        Change th A
      </button>
    </div>
  );
};

export default MyFunction;
