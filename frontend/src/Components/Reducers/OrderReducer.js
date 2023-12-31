import { ORDERS_LIST_REQUEST,
         ORDERS_LIST_SUCCESS,
         ORDERS_LIST_FAIL
 } from "../Constants/OrderConstants"


export const orderReducer = (state= {orders:[]}, action)=>{

    switch(action.type){
        case ORDERS_LIST_REQUEST:
            return {loading:true,orders:[]}
      
        case ORDERS_LIST_SUCCESS:
            return {loading:false,orders:action.payload}


        case ORDERS_LIST_FAIL:
            return {loading:false,error:action.payload}

        default:
            return state
    }

}