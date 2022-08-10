import React from "react";
import { useSelector } from "react-redux";

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting.value);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
}

export default Greeting;