import {  configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import postReducer from './StateSlice'




const store = configureStore({
  reducer: {

    post:postReducer

  },
  middleware: (middleware) => middleware().concat(thunk)
});


export default store