 import axios from "axios";
//redux thunk
// function GetCinemaListAction() {
//     return (dispatch) => {
//         axios({
//             url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=283872',
//             method: "get",
//             headers: {
//                 'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16684901465142153890103297","bc":"110100"}',
//                 'X-Host': 'mall.film-ticket.cinema.list'
//             }
//         }).then(res => {
//             // console.log(res.data.data.cinemas)
//             dispatch({
//                 type: "changeCinemaList",
//                 value: res.data.data.cinemas
//             })
//         })
//
//     }
// }

//redux-promise
// function GetCinemaListAction( ) {
//     return axios({
//             url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=283872',
//             method: "get",
//             headers: {
//                 'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16684901465142153890103297","bc":"110100"}',
//                 'X-Host': 'mall.film-ticket.cinema.list'
//             }
//         }).then(res => {
//             // console.log(res.data.data.cinemas)
//             return({
//                 type: "changeCinemaList",
//                 value: res.data.data.cinemas
//             })
//         })
// }

// async
async function GetCinemaListAction( ) {
    var list = await   axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=283872',
            method: "get",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16684901465142153890103297","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            // console.log(res.data.data.cinemas)
            return({
                type: "changeCinemaList",
                value: res.data.data.cinemas
            })
        })
    return list
}
export default GetCinemaListAction;