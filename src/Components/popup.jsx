import React from 'react';
import "./popup.css";
 

export const Popup = (props) => {
  return(props.trigger) ? (
    <div className='popup'>
      <div className='popupInner'>
        <button className='closeButton'>Close</button>
        {props.children}
      </div>
    </div>
  ) :"";
}

export default Popup
