import React from "react";

// const SayHello = () => <h1> Helasdasdlo </h1>;

const App = () => {
  let a = [1, 2, 3];

  return (
    <div>
      {a.map((x) => (
        <h1>{x}</h1>
      ))}
    </div>
  );
};

export default App;
