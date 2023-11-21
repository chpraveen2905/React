import Person from './Person';
import React from 'react';

const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </section>
  );
};

export default List;
