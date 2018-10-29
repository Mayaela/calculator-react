import React from 'react';
import './Screen.css'

const Screen = (props) => {
    return (
        <div className='putBorder'>
            <br/>
            <p>
                {props.operation}
            </p>
            <p>
                {props.result}
            </p>
            <br/>
        </div>
      );
}
 
export default Screen ;