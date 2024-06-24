// khởi tạo state
import { createSlice } from "@reduxjs/toolkit";

const CountlState:number = 1;
const coutReducer = createSlice({
    name:"count-reduces",
    initialState:CountlState,
    reducers:{
        //Đây là những actions
        increase:(state)=>state+=1,
        decrease:(state)=>state-=1,
        reset:(state)=>state=0,
    }

});
// xuất ra những cái actions
export const {increase,decrease,reset} = coutReducer.actions;
// xuất ra thằng reducer
export default coutReducer.reducer;