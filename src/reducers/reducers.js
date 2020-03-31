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
    error: null,
    total: 0,
    totalDiscount:0
}

const reducer = (state = initialState, action) => {
    if(action.type === "GET_DATAA" && state.selectedItems.length === 0){
        return{
            ...state,
            products:action.payload.filter(el => el != null)
        }
    }
    if(action.type === "ERROR_LOADING_DATA"){
        return{
            ...state,
            error: action.dataState
        }
    }
    if(action.type === "UPDATE_CART"){
        // console.log(action.elem)
        let addedProduct = state.products.find(el => el.id === parseInt(action.elem));

        let sItems = state.selectedItems.find(el => el.id === parseInt(action.elem));
        if(sItems){
            console.log('if block')
            // console.log(addedProduct.productQty)
            addedProduct.productQty += 1;
            console.log(addedProduct.productQty)

            return {
                ...state,
                // selectedItems: [...state.selectedItems, addedProduct],
                // selectedItems: [...state.selectedItems, addedProduct].filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i),
                total: state.total + addedProduct.price,
                totalDiscount: state.totalDiscount + ((addedProduct.price*addedProduct.discount)/100)
            }
        }else{
            console.log('else block')
            addedProduct.productQty = 1;

            return{
                ...state,
                total: state.total + addedProduct.price,
                totalDiscount: state.totalDiscount + ((addedProduct.price*addedProduct.discount)/100),
                // selectedItems: [...state.selectedItems, addedProduct]
                selectedItems: state.selectedItems.concat(state.products.filter(el => el.id === parseInt(action.elem)))
            }
        }
    }
    if(action.type === "QTY_INCREMENT"){
        console.log(action.elem)
        let addedProduct = state.products.find(el => el.id === parseInt(action.elem));
        addedProduct.productQty += 1;
        
        return{
            ...state,
            // selectedItems: [...state.selectedItems, addedProduct].filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i),
            total: state.total + addedProduct.price,
            totalDiscount: state.totalDiscount + ((addedProduct.price*addedProduct.discount)/100)
        }
    }
    if(action.type === "QTY_DECREMENT"){
        let addedProduct = state.products.find(el => el.id === parseInt(action.elem));
        addedProduct.productQty -= 1;
        return{
            ...state,
            // selectedItems: [...state.selectedItems, addedProduct].filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i),
            total: state.total - addedProduct.price,
            totalDiscount: state.totalDiscount - ((addedProduct.price*addedProduct.discount)/100)
        }
    }
    if(action.type === "DELETE_ITEM"){
        return{
            ...state,
            selectedItems: state.selectedItems.filter(el => el.id !== parseInt(action.elem)),
            total: state.total - (action.elemQty * action.elemPrice),
            totalDiscount: state.totalDiscount - (action.elemPrice*action.elemDiscount/100)*action.elemQty
        }
    }
    if(action.type === "LOW_TO_HIGH"){
        // console.log('called');
        return{
            ...state,
            products: [...state.products].sort((a, b) => parseFloat(a.price) - parseFloat(b.price))    
        }
    }
    if(action.type === "HIGH_TO_LOW"){
        return{
            ...state,
            products: [...state.products].sort((a, b) => parseFloat(b.price) - parseFloat(a.price))    
        }
    }
    if(action.type === "SORT_BY_DISCOUNT"){
        return{
            ...state,
            products: [...state.products].sort((a, b) => parseFloat(b.discount) - parseFloat(a.discount))    
        }
    }
    return state;
}
export default reducer;