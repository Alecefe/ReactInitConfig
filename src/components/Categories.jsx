import React from 'react';
import '../assets/styles/components/Categories.scss';

const capitalize = (string) => `${string[0].toUpperCase()}${string.slice(1)}`;

const Categories = ({ children, title }) => (
  <div className='categories'>
    <h3 className='categories__title'>{`Platzi Video ${capitalize(title)}`}</h3>
    {children}
  </div>
);

export default Categories;
