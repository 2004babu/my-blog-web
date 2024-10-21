import { createSlice } from "@reduxjs/toolkit";

const postState=createSlice({name:"post",initialState:{post:{}},reducers:{
    setPost(state,action){
        return{
            ...state,
            post:action.payload.posts
        }
    }
}})


const {actions,reducer}=postState

export const {setPost}=actions

export default reducer;
