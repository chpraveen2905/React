import { useState } from 'react';
const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  console.log(useState());
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button type='button' className='btn' onClick={handleClick}>
        Click Me
      </button>
      <h4>{count}</h4>
    </div>
  );
};

export default UseStateBasics;
