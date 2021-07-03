export const initialState = {
    technologies: new Set(["Python", "Java", "C++", "Swift", "React", "Node.JS", "ROS"])
};

const projectFilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "toggle":
            const modifiedTechnologies = new Set(state.technologies);
            if (state.technologies.has(action.payload)) {
                modifiedTechnologies.delete(action.payload);
            } else {
                modifiedTechnologies.add(action.payload);
            }
            return {
                technologies: modifiedTechnologies
            };
        default:
            return state;
    }
}

export default projectFilterReducer;