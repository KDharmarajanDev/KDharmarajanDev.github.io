import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    technologies: new Set(["Python", "Java", "C++", "Swift", "React", "Node.JS", "ROS"])
};

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
      toggle(state, technology) {
        if (state.technologies.has(technology)) {
            state.technologies.delete(technology)
        } else {
            state.technologies.add(technology)
        }
      }
    },
})  

export const { toggle } = projectSlice.actions
export default projectSlice.reducer;