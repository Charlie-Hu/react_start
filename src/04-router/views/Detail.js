import React, {useEffect} from 'react';

function Detail(props) {
    console.log(props.match.params.myId)
    // console.log(props.location.query.id)
    useEffect(()=>{
        console.log("create")
        return ()=>{
            console.log("destroy")
        }
    },[])
    return (
        <div>
            Detail
        </div>
    );
}

export default Detail;