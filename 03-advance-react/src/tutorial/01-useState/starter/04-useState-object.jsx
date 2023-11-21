import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Spider',
    age: 28,
    occupation: 'developer',
  });
  const display = () => {
    setPerson({
      name: 'Johny',
      age: 30,
      occupation: 'designer',
    });

    // be careful, don't overwrite
    // setPerson({ name: 'susan' });
    // setPerson({ ...person, name: 'susan' });
  };
  return (
    <div>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.occupation}</h3>
      <button type='button' className='btn' onClick={display}>
        Show John
      </button>
    </div>
  );
};

export default UseStateObject;
