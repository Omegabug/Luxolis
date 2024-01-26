import React from 'react';
import "./popup.css";
 

export const Popup = (props) => {
  return(props.trigger) ? (
    <div className='popup'>
      <div className='popupInner'>
        {props.children}
        <button className='closeButton' onClick={props.closePopup}>Close</button>
      </div>
    </div>
  ) :"";
}

export default Popup
