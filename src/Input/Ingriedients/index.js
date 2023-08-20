// const Input = () => {
//   return "hello Ingriedients";
// };

// export default Input;

import React from "react";
import { useState } from "react";

const Input = ({ handleGetByIngriedient }) => {
  const [ingriedient, setIngriedient] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleGetByIngriedient(ingriedient);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        <input
          placeholder="Ingriedient"
          type="text"
          name="Ingriedient Input"
          onChange={(e) => setIngriedient(e.target.value)}
        />
      </label>
      <input type="submit" value="SEARCH" />
    </form>
  );
};

export default Input;
