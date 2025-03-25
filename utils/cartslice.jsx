import { createSlice } from "@reduxjs/toolkit";
const cartslice = createSlice({
    name: 'carts',
    initialState: {
        items: [],
    },
  reducers:{
    additems :(state,action)=>{
        state.items.push(action.payload)//when i click + icon it will dispatch or action
    },
    removeitems:()=>{
        state.items.pop();

    },
    clearcart:(state)=>{
        state.items=[];
    }
  }
});
export const{additems,removeitems,clearcart} = cartslice.actions;
export default cartslice.reducer;