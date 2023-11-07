import React, { useContext } from 'react';
import { GridContext } from './GridContext';

const Cell = ({ id }) => {
  const { cells, toggleCell } = useContext(GridContext);
  const isActive = cells[id];

  const cellStyle = {
    width: '100px',
    height: '100px',
    border: '1px solid grey',
    backgroundColor: isActive ? 'black' : 'white',
    cursor: 'pointer',
  };

  return (
    <div style={cellStyle} onClick={() => toggleCell(id)} />
  );
};

export default Cell;