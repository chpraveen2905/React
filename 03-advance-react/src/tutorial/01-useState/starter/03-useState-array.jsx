import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newArr = people.filter((person) => person.id !== id);
    setPeople(newArr);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button className='btn' onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}

      <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={() => {
          setPeople([]);
        }}
      >
        Clear Items
      </button>
    </div>
  );
};

export default UseStateArray;
