import { useState } from "react";

const Likes = () => {
  const [ likes, setLikes ] = useState(0);
  const [ value, setValue ] = useState("Комментарии");

  function increment () {
    setLikes(likes + 1);
  };

  function decrement () {
    setLikes(likes - 1);
  };

  return (
    <div>
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input type="text" value={value} onChange={event => setValue(event.target.value)} />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Likes;
