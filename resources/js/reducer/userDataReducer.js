export const userDataInitialState = { user: null }

const userDataReducer = (userData, action) => {
    switch(action.type) {
        case "LOGIN":
            return { user: { ...action.user } };
        case "LOGOUT":
            return {user: null };
        default: return {...userData};
    }
}

export default userDataReducer;
