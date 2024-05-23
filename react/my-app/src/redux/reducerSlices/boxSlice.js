import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    backgroundColor: 'red', 
    width: 50,
    height: 50,
    radius:0
}

const boxSlice = createSlice({
  name: 'box',
  initialState: initialState,
  reducers: {
    changeHeight(state) {
      state.height=state.height+10
    },
    changeWidth(state) {
      state.width=state.width+10

    },
    changeShape(state){
      // toggle
      // if(state.radius==0){
      
      //     state.radius=state.radius=50
      // }
      // else{
      //     state.radius=0
      // }

      if(state.width!==state.height){
        state.width=state.height
        state.radius=50

      }else{
        state.radius=50
      }
       
  },
  changeBackground(state,action){
      state.backgroundColor=action.payload
  }
      
    },
  },
)

export const { changeHeight } = boxSlice.actions
export const { changeWidth} = boxSlice.actions
export const { changeShape,changeBackground} = boxSlice.actions
export default boxSlice.reducer