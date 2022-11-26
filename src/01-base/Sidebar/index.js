import React from 'react';

function Sidebar(props) {
    let {bg, position} = props
    console.log(bg, position)
    var obj = {
        background: bg,
        width: "200px",
        position: "fixed"
    }
    var obj1 = {
        left:0
    }
    var obj2 = {
        right:0
    }

    var stylesheet = position === "left"?{...obj,...obj1}:{...obj,...obj2}


    return (
        <div style={stylesheet}>
            <ul>
                <li> 1111111111</li>
                <li> 1111111111</li>
                <li> 1111111111</li>
                <li> 1111111111</li>
                <li> 1111111111</li>
                <li> 1111111111</li>
                <li> 1111111111</li>
                <li> 1111111111</li>
                <li> 1111111111</li>
                <li> 1111111111</li>
                <li> 1111111111</li>
                <li> 1111111111</li>
            </ul>
        </div>
    );
}

export default Sidebar;