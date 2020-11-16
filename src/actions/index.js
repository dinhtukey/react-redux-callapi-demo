import * as Types from './../constants/ActionTypes'
import callAPI from './../utils/apiCaller'


///////////////////////////////fetch list product

//api
export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callAPI('products','GET',null).then(res=>{
            dispatch(actFetchProducts(res.data))
        })
    }
}

//redux
export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

///////////////////////////////delete product
//api
export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callAPI(`products/${id}`,'DELETE',null).then(res=>{
            dispatch(actDeleteProduct(id))
        })
    }
}
//redux
export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}


////////////////////////////////add product
//api
export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return callAPI('products','POST',product).then(res=>{
            dispatch(actAddProduct(res.data))
        })
    }
}
//redux
export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}


///////////////////////////////fetch product by id
//api
export const actGetProductRequest = (id) => {
    return (dispatch) => {
        return callAPI(`products/${id}`,'GET',null).then(res=>{
            dispatch(actGetProduct(res.data))
        })
    }
} 
//redux
export const actGetProduct = (product) => {
    return {
        type: Types.FETCH_PRODUCT_BY_ID,
        product
    }
}

////////////////////////////update product
export const actUpdateProductRequest = (product) => {
    return (dispatch) => {
        return callAPI(`products/${product.id}`,'PUT',product).then(res=>{
            dispatch(actUpdateProduct(res.data))
        })
    }
}
export const actUpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}