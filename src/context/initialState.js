import { fetchUser } from "../utils/fetchLocalStorageData"

const   userInfo = fetchUser()
const   cartInfo = fetchUser()

export const initialState ={
    user : userInfo,
    foodItems : null,
    cartShow : false,
    cartItems : cartInfo
}