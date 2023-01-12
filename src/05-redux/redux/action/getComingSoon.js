import axios from "axios";

function GetCinemaListAction( ) {
    return (dispatch) => {
        axios({
            url:"https://m.maizuo.com/gateway?cityId=410500&pageNum=1&pageSize=10&type=2&k=9145816",
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16719553361158090686726145","bc":"410500"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => {
            // console.log(res.data.data.cinemas)
            dispatch({
                type: "changeComingSoon",
                value: res.data.data.cinemas
            })
        })

    }
}

export default GetCinemaListAction;