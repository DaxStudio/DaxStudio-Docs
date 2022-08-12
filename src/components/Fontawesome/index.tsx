import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Checkmark({children, color}) {
  const ico = solid('download');
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '2px',
        color: '#fff',
        padding: '0.2rem',
      }}>

         <FontAwesomeIcon icon={ico} /> 
      {children}
    </span>
  );
}