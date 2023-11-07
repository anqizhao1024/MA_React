import React, { createContext, useState } from 'react';

export const GridContext = createContext({
  cells: {},
  toggleCell: () => {},
});

export const GridProvider = ({ children }) => {
  const [cells, setCells] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const toggleCell = (id) => {
    setCells((prevCells) => ({
      ...prevCells,
      [id]: !prevCells[id],
    }));
  };

  return (
    <GridContext.Provider value={{ cells, toggleCell }}>
      {children}
    </GridContext.Provider>
  );
};