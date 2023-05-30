import {createSlice} from '@reduxjs/toolkit'
const initialState =" v j"  // its just some value like 3
export const nameSlice = createSlice({
    name: 'personName',  // this is name of our varaible. like val
    initialState,  // its equivalent to saying val = 3
    reducers:{  // these 
        updateName: (state, action) =>{
            console.log(state,"cuuent state")
            console.log(action.payload,"new state")
            console.log(action,"action")
            return action.payload
        }
    }
})
export const {updateName} =nameSlice.actions // wew are exporting here so that we can use it at time of dispatching

export default nameSlice.reducer