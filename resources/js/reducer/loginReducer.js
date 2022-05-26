export const loginDataInitialState = {
    values: {
        username: "",
        password: "",
    },
    validities: {
        username: true,
        password: true,
    },
    errors: {
        username: "User Name is requier",
        password: "Password is requier"
    },
    // errorField: true,
    isFormValid: false,
};

const loginReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_USER_NAME":{
            // update username
            const updatedValues = {...state.values, username: action.value};
            // update validities
            const updatedValidities = {...state.validities, username: action.isValid};
            // update errors
            const updatedErrors = {...state.errors}
            // Initial typing checking the fields
            updatedValidities.password = updatedValues.password === '' ? false : true;
            // check if form is valid and change button to undispatch
            const updatedIsFormValid = (action.isValid && updatedValidities.password);

            return {values: updatedValues, validities: updatedValidities, errors: updatedErrors, isFormValid: updatedIsFormValid};
        }
        case "UPDATE_PASSWORD":{
            // update password
            const updatedValues = {...state.values, password: action.value};
            // update validities
            const updatedValidities = {...state.validities, password: action.isValid};
            // update errors
            const updatedErrors = {...state.errors, password: action.errorMessage}
            // Initial typing checking the fields
            updatedValidities.email = updatedValues.email === '' ? false : true;
            // check if form is valid and change button to undispatch
            const updatedIsFormValid = (updatedValidities.email && action.isValid);

            return {values: updatedValues, validities: updatedValidities, errors: updatedErrors, isFormValid: updatedIsFormValid};
        }
        default: return {...state};
    }
}

export default loginReducer;
