import { useState } from "react";

const HandleInputChange = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <h1>Handle Input Change</h1>
      <p>You Typed : {text}</p>
      <input
        onChange={handleChange}
        type="text"
        value={text}
        placeholder="Type Something Here..."
      />
    </div>
  );
};

export default HandleInputChange;
