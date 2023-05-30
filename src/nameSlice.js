// We have storage -> slice -> variable -> actions for varaiable


import {createSlice} from '@reduxjs/toolkit'
const initialState =" v j"  // its just some value like 3
export const nameSlice = createSlice({
    name: 'personName',  // this is name of our varaible. like val
    initialState,  // its equivalent to saying val = 3
    reducers:{  // these are functions associated with our varqaiable val
        updateName: (state, action) =>{ //state is current state. action contain new state plus type (type is one of associoated functions)
            // ex:- {
            //     "type": "personName/updateName",
            //     "payload": "new value here"
            // }
            console.log(state,"cuuent state")
            console.log(action.payload,"new state")
            console.log(action,"action")
            return action.payload
        }
    }
})

//nameSlice.actions is actually nameSlice.reducers obkject . ex.  a={'age':45}; const {age} = a;
export const {updateName} =nameSlice.actions // we are exporting here so that we can use it at time of dispatching

// export default nameSlice.reducer   -not required if aklready exported