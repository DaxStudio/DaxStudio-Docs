import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'


export function Yes({children}) {
  return (
  <span><i className="fa-solid fa-circle-check check"></i><strong> Yes</strong></span>
  )
}

export function No({children}) {
  return (
  <span><i className="fa-solid fa-circle-xmark cross"></i> No</span>
  )
}

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

         {/* <FontAwesomeIcon icon={solid('download')} />  */}
      {children}
    </span>
  );
}