import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    "Python": true,
    "Java": true,
    "C++": true,
    "Swift": true,
    "React": true,
    "Node.JS": true,
    "ROS": true
};

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
      toggle(state, technology) {
        state[technology.payload] = !state[technology.payload]
      }
    },
})  

export const { toggle } = projectSlice.actions
export default projectSlice.reducer;