import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
  count: 0,
 activeItem:[]
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
    
        if(state.products.length === 0) {
            state.products.push(action.payload)
            
          
        }
         else {
            state.products.push(action.payload)
        
        }
        
     
    },
    onChangeActiveItem:(state,action)=>{
     state.activeItem = action.payload
    },
    
    increament(state, action) {
        state.products = state.products.map(e => {
                if(action.payload.id === e.id) {
                    return {...e, count: e.count + 1,}

                } else {
                    return e
                }
        }) 
          
      },

     
      decrement(state, action) {
        console.log(action.payload)
        state.products = state.products.map(e => {
            if(action.payload.id === e.id) {
                return {...e, count: e.count - 1}
               
            } else {
                return e
            }
    }) 
       
      },
    resetCart: (state, action) => {
      state.products = [];
      state.total = 0;
    },
    removeFromCart :(state, action) => {
        let index = state.products.indexOf(action.payload);
        state.count-= action.payload
        state.products.splice(index, 1)
    
    }
    
  }
});



export const { addToCart, resetCart ,increament,decrement,removeFromCart, onChangeActiveItem} = cartSlice.actions;

export default cartSlice.reducer;