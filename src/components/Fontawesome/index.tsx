import React from 'react';

import faCircleCheck from '@fortawesome/free-solid-svg-icons/faCircleCheck';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

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