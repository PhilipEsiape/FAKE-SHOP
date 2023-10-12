import { ActionTypes } from  "../constants/actionTypes";

export const setProducts = (products) => {
    return {
        type : ActionTypes.SET_PRODUCTS,
        playload : products,
    };
};
    export const selectedProducts = (product) => {
        return {
            type : ActionTypes.SELECTED_PRODUCT,
            playload : product,
        };

};
export const removeSelectedProduct=()=>{
    return{
        type : ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};