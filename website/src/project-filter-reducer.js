const initialState = {
    technologies: new Set(["Python", "Java", "C++", "Swift", "React", "Node.JS"])
};

const projectFilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "remove":
            returnObject = {
                technologies: state.technologies
            };
            returnObject.technologies.delete(action.payload);
            return returnObject;
        case "add":
            return {
                technologies: state.technologies.add(action.payload)
            };
        default:
            return state;
    }
}

export default projectFilterReducer;