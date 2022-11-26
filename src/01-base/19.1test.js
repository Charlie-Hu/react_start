import React from 'react';

function Test(props){
    console.log(props.mydata)
    return (
        <div>
            {props.mydata}
        </div>
    );
}

export default Test;