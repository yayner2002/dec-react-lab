import { useState } from "react";

const Product = ({ name, description, initLikes }) => {
  const [likes, setLikes] = useState(initLikes);
  const handleLikes = () => setLikes(likes + 1);
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick={handleLikes}>Like {likes}</button>
    </div>
  );
};

export default Product;
