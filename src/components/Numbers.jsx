import React from 'react';

const Numbers = (props) => {
    return (
        <div>
          <br/>
            <button onClick={props.write} value="5" >5</button>
            <button onClick={props.write} value="6" >6</button>
            <button onClick={props.write} value="7" >7</button>
            <button onClick={props.write} value="8" >8</button>
            <button onClick={props.write} value="9" >9</button>
            <br/>
            <button onClick={props.write} value="0" >0</button>
            <button onClick={props.write} value="1" >1</button>
            <button onClick={props.write} value="2" >2</button>
            <button onClick={props.write} value="3" >3</button>
            <button onClick={props.write} value="4" >4</button>
        </div>
      );
}
 
export default Numbers ;