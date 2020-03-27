const initialState = {
    // products : [
    //     {
    //       "id": 9090,
    //       "name": "Item111",
    //       "price": 200,
    //       "discount": 10,
    //       "category": "fiction",
    //       "img_url": "http://lorempixel.com/500/600/technics/"
    //     },
    //     {
    //       "id": 9091,
    //       "name": "Item2",
    //       "price": 250,
    //       "discount": 15,
    //       "category": "literature",
    //       "img_url": "http://lorempixel.com/500/600/technics/"
    //     },
    //     {
    //       "id": 9092,
    //       "name": "Item3",
    //       "price": 320,
    //       "discount": 5,
    //       "category": "literature",
    //       "img_url": "http://lorempixel.com/500/600/technics/"
    //     },
    //     {
    //       "id": 9093,
    //       "name": "Item4",
    //       "price": 290,
    //       "discount": 0,
    //       "category": "thriller",
    //       "img_url": "http://lorempixel.com/500/600/technics/"
    //     },
    //     {
    //       "id": 9094,
    //       "name": "Item1",
    //       "price": 500,
    //       "discount": 25,
    //       "category": "thriller",
    //       "img_url": "http://lorempixel.com/500/600/technics/"
    //     },
    //     {
    //       "id": 9095,
    //       "name": "Item2",
    //       "price": 150,
    //       "discount": 5,
    //       "category": "literature",
    //       "img_url": "http://lorempixel.com/500/600/technics/"
    //     },
    //     {
    //       "id": 9096,
    //       "name": "Item3",
    //       "price": 700,
    //       "discount": 22,
    //       "category": "literature",
    //       "img_url": "http://lorempixel.com/500/600/technics/"
    //     },
    //     {
    //       "id": 9097,
    //       "name": "Item4444",
    //       "price": 350,
    //       "discount": 18,
    //       "category": "fiction",
    //       "img_url": "http://lorempixel.com/500/600/technics/"
    //     }
    //   ]
    products:[],
    selectedItems:[],
    error: null
}

const reducer = (state = initialState, action) => {
    if(action.type === "GET_DATAA"){
        return{
            ...state,
            products:action.payload.filter(el => el != null),
        }
    }
    if(action.type === "ERROR_LOADING_DATA"){
        return{
            ...state,
            error: action.dataState
        }
    }
    if(action.type === "UPDATE_CART"){
        console.log(action.elem)
        return{
            ...state,
            selectedItems: state.selectedItems.concat(state.products.filter(el => el.id === parseInt(action.elem)))
        }
    }
    return state;
}
export default reducer;

// tobeEdited: state.products.filter(el => el.pId === action.elem),
