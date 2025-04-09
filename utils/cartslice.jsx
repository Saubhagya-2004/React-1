import { createSlice } from "@reduxjs/toolkit";
const cartslice = createSlice({
    name: 'carts',
    initialState: {
        items: [],
    },
  reducers:{
    additems :(state,action)=>{
       const existitem =  state.items.find(item => item.id === action.payload.id)//when i click + icon it will dispatch or action
       if(existitem){
        existitem.quantity+=1;
       }
       else{
        state.items.push({...action.payload,quantity:1})
       }
    },
    deleteitems :(state,action)=>{
        const existitem =  state.items.find(item => item.id === action.payload.id)//when i click + icon it will dispatch or action
        
        
            if(existitem.quantity > 1){

                existitem.quantity-=1;
            }
       
       
     },
    removeitems:(state,action)=>{
        // Remove the specific item by filtering based on its id
        const existitem = state.items = state.items.filter(item => item.id !==action.payload.id)
        if(existitem && existitem.quantity>1){
            existitem.quantity-=1;
        }
        else{

            state.items = state.items.filter(item => item.id !== action.payload.id);
        }

    },
    clearcart:(state)=>{
        state.items = [];
    }
   
  }
});
export const{additems,removeitems,clearcart,deleteitems} = cartslice.actions;
export default cartslice.reducer;