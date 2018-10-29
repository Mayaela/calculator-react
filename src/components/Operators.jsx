import React from 'react';

const Operators = (props) => {
    return (
        <div>
          <br/>
            <button onClick={props.write} value="+" >+</button>
            <button onClick={props.write} value="-" >-</button>
            <button onClick={props.write} value="*" >x</button>
            <button onClick={props.write} value="/" >/</button>
            <button onClick={props.write} value="." >.</button>
            <br/>
            <br/>
            <button onClick={props.getResult} value="=" >RESULT</button><button onClick={props.clearScreen} value="clear" >CLEAR</button>

        </div>
      );
}
 
export default Operators ;