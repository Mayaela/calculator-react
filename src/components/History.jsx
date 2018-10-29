import React from 'react';

const History = (props) => {
    const historyTab = props.history
    return (
        historyTab.map( (object, index) =>
        
        <div key={index}>
            <hr/>
            <p>
                {object.operation}
            </p>
            <p>
                {object.result}
            </p>
        </div>
      )
    )
}
 
export default History ;