import React, { useContext } from 'react';
import Cell from './Cell';
import { GridContext } from './GridContext';

const Grid = () => {
  const { cells } = useContext(GridContext);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'start',
    minHeight: '100vh', 
    paddingTop: '20px', 
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 100px)',
    justifyContent: 'center',
  };

  const count = Object.values(cells).filter(Boolean).length;

  return (
    <div style={containerStyle}>
      <h2>Count: {count}</h2>
      <div style={gridStyle}>
        <Cell id={1} />
        <Cell id={2} />
        <Cell id={3} />
        <Cell id={4} />
      </div>
    </div>
  );
};

export default Grid;