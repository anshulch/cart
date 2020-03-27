import axios from './axiosBaseURL';

export const fetchItems = () => {
    return (dispatch) => {
        axios.get('/')
            .then(response => {
                if(response.data){
                    // console.log('data')
                    dispatch({type:"GET_DATAA", payload:response.data, spinner: false, })
                }else{
                    console.log('no data')
                    dispatch({type:"NO_DATA", spinner: false, dataError:true, dataState: "No Data"})
                }
            })
            .catch(error => {
                console.log("Something went wrong...");
                dispatch({type:"ERROR_LOADING_DATA", spinner: false, dataError:true, dataState: "Something went wrong"})
            })
    }
}