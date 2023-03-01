import { useDispatch } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"

import { actions } from "../redux/slicers/fakeShopSlice"
import { fetchProducts,fetchProduct } from '../redux/actions/actions';

const allActions = {
    fetchProducts, 
    fetchProduct,
    ...actions
}

const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(allActions, dispatch)
}

export default useActions