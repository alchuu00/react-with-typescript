import React, { useState } from 'react';
import { IState as Props } from '../App';

interface IProps {
  people: Props['people'];
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    note: '',
    img: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    if (!input.name || !input.age) return;

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age, 10), // Parse age as base 10
        img: input.img,
        note: input.note,
      },
    ]);
  };

  return (
    <div className='AddToList'>
      <input
        type='text'
        placeholder='Name'
        className='AddToList-input'
        name='name'
        value={input.name}
        onChange={handleChange}
      />

      <input
        type='text'
        placeholder='Age'
        className='AddToList-input'
        name='age'
        value={input.age}
        onChange={handleChange}
      />

      <input
        type='text'
        placeholder='Image url'
        className='AddToList-input'
        name='img'
        value={input.img}
        onChange={handleChange}
      />

      <textarea
        placeholder='Note'
        className='AddToList-input'
        name='note'
        value={input.note}
        onChange={handleChange}
      />

      <button className='AddToList-btn' onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
