import { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  const handlIncrement = () => {
    setCount(count + 1);
  };
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount((prevState) => prevState + 1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
  return (
    <div>
      Time Passed : {count}
      <button onClick={() => setCount(count-1)}>-</button>
      <button onClick={handlIncrement}>+</button>
    </div>
  );
};

export default Timer;
