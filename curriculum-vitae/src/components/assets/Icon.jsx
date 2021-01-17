import React from 'react';
import { IconContext } from 'react-icons';

//TODO Move out the icon function to another file and export it.
//TODO prio zero, reformat css

export const Icon = props => (
  <IconContext.Provider
    value={{
      style: { verticalAlign: 'middle', zIndex: 2 },
      color: `${props.color}`,
      size: `${props.iconSize}`
    }}
  >
    <props.iconName />
  </IconContext.Provider>
);
