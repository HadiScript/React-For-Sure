import React, { useEffect, useState } from "react";

// child

const Home = () => {
  // const [count, setCount] = useState(0);

  // useEffect( function, dep array )

  // useEffect(() => {}, []); // [] empty -> call for one time, born stage

  // useEffect(() => {
  //   console.log("AM HERE");
  // }, []); // [] empty -> call for one time, born stage

  // useEffect(() => {
  //   console.log(count);
  // }, [count]);

  console.log("Am rendering");

  return (
    <div>
      Home
      {/* <button onClick={() => setCount(count + 1)}> change the count </button> */}
    </div>
  );
};

export default Home;
