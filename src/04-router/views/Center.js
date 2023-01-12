import React from 'react';

function Center(props) {
    return (
        <div>
            Center
            <div onClick={()=>{
                props.history.push('/filmSolder')
            }}>Film Solder</div>
        </div>
    );
}

export default Center;