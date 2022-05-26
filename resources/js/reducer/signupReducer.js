export const signUpDataInitialState = {
    values: {
        firstname: "",
        familyname: "",
        email: "",
        phone: "",
        username: "",
        password: "",
    },
    validities: {
        firstname: true,
        familyname: true,
        email: true,
        phone: true,
        username: true,
        password: true,
    },
    errors: {
        firstname: "First Name is requier",
        familyname: "Family Name is requier",
        email: "Email is requier",
        phone: "Phone Number is requier",
        username: "UserName is requier",
        password: "Password is requier"
    },
    isFormValid: false,
    user: null
};

export const signupReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_FIRST_NAME":{
            // update firstName
            const updatedValues = {...state.values, firstname: action.value};
            // update validities
            const updatedValidities = {...state.validities, firstname: action.isValid};
            // update errors
            const updatedErrors = {...state.errors}
            // Initial typing checking the fields
            updatedValidities.familyname = updatedValues.familyname === '' ? false : true;
            updatedValidities.email = updatedValues.email === '' ? false : true;
            updatedValidities.phone = updatedValues.phone === '' ? false : true;
            updatedValidities.username = updatedValues.username === '' ? false : true;
            updatedValidities.password = updatedValues.password === '' ? false : true;
            // check if form is valid and change button to undispatch
            const updatedIsFormValid = (action.isValid && updatedValidities.familyname &&
                                        updatedValidities.email && updatedValidities.phone &&
                                        updatedValidities.username && updatedValidities.password);

            return {values: updatedValues, validities: updatedValidities, errors: updatedErrors, isFormValid: updatedIsFormValid};
        }
        case "UPDATE_FAMILY_NAME":{
            // update familyName
            const updatedValues = {...state.values, familyname: action.value};
            // update validities
            const updatedValidities = {...state.validities, familyname: action.isValid};
            // update errors
            const updatedErrors = {...state.errors}
            // Initial typing checking the fields
            updatedValidities.firstname = updatedValues.firstname === '' ? false : true;
            updatedValidities.email = updatedValues.email === '' ? false : true;
            updatedValidities.phone = updatedValues.phone === '' ? false : true;
            updatedValidities.username = updatedValues.username === '' ? false : true;
            updatedValidities.password = updatedValues.password === '' ? false : true;
            // check if form is valid and change button to undispatch
            const updatedIsFormValid = (action.isValid && updatedValidities.firstname &&
                                        updatedValidities.email && updatedValidities.phone &&
                                        updatedValidities.username && updatedValidities.password);

            return {values: updatedValues, validities: updatedValidities, errors: updatedErrors, isFormValid: updatedIsFormValid};
        }
        case "UPDATE_EMAIL":{
            // update email
            const updatedValues = {...state.values, email: action.value};
            // update validities
            const updatedValidities = {...state.validities, email: action.isValid};
            // update errors
            const updatedErrors = {...state.errors, email: action.errorMessage}
            // Initial typing checking the fields
            updatedValidities.firstname = updatedValues.firstname === '' ? false : true;
            updatedValidities.familyname = updatedValues.familyname === '' ? false : true;
            updatedValidities.phone = updatedValues.phone === '' ? false : true;
            updatedValidities.username = updatedValues.username === '' ? false : true;
            updatedValidities.password = updatedValues.password === '' ? false : true;
            // check if form is valid and change button to undispatch
            const updatedIsFormValid = (action.isValid && updatedValidities.firstname &&
                                        updatedValidities.familyname && updatedValidities.phone &&
                                        updatedValidities.username && updatedValidities.password);

            return {values: updatedValues, validities: updatedValidities, errors: updatedErrors, isFormValid: updatedIsFormValid};
        }
        case "UPDATE_PHONE_NUMBER":{
            // update email
            const updatedValues = {...state.values, phone: action.value};
            // update validities
            const updatedValidities = {...state.validities, phone: action.isValid};
            // update errors
            const updatedErrors = {...state.errors, phone: action.errorMessage}
            // Initial typing checking the fields
            updatedValidities.firstname = updatedValues.firstname === '' ? false : true;
            updatedValidities.familyname = updatedValues.familyname === '' ? false : true;
            updatedValidities.email = updatedValues.email === '' ? false : true;
            updatedValidities.username = updatedValues.username === '' ? false : true;
            updatedValidities.password = updatedValues.password === '' ? false : true;
            // check if form is valid and change button to undispatch
            const updatedIsFormValid = (action.isValid && updatedValidities.firstname &&
                                        updatedValidities.familyname && updatedValidities.email &&
                                        updatedValidities.username && updatedValidities.password);

            return {values: updatedValues, validities: updatedValidities, errors: updatedErrors, isFormValid: updatedIsFormValid};
        }
        case "UPDATE_USER_NAME":{
            // update userName
            const updatedValues = {...state.values, username: action.value};
            // update validities
            const updatedValidities = {...state.validities, username: action.isValid};
            // update errors
            const updatedErrors = {...state.errors}
            // Initial typing checking the fields
            updatedValidities.firstname = updatedValues.firstname === '' ? false : true;
            updatedValidities.familyname = updatedValues.familyname === '' ? false : true;
            updatedValidities.email = updatedValues.email === '' ? false : true;
            updatedValidities.phone = updatedValues.phone === '' ? false : true;
            updatedValidities.password = updatedValues.password === '' ? false : true;
            // check if form is valid and change button to undispatch
            const updatedIsFormValid = (action.isValid && updatedValidities.firstname &&
                                        updatedValidities.familyname && updatedValidities.email &&
                                        updatedValidities.phone && updatedValidities.password);

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
            updatedValidities.fullname = updatedValues.fullname === '' ? false : true;
            updatedValidities.email = updatedValues.email === '' ? false : true;
            // check if form is valid and change button to undispatch
            const updatedIsFormValid = (updatedValidities.fullname && updatedValidities.email && action.isValid);

            return {values: updatedValues, validities: updatedValidities, errors: updatedErrors, isFormValid: updatedIsFormValid};
        }
        case "EMAIL_EXSIST":{
            // values
            const updatedValues = {...state.values};
            // update validities
            const updatedValidities = {...state.validities, email: action.isValid};
            // update errors
            const updatedErrors = {...state.errors, email: action.emailExist};
            // Initial typing checking the fields
            updatedValidities.fullname = updatedValues.fullname === '' ? false : true;
            updatedValidities.password = updatedValues.password === '' ? false : true;
            // check if form is valid and change button to undispatch
            const updatedIsFormValid = (updatedValidities.fullname && action.isValid && updatedValidities.password);
            return {values: updatedValues, validities: updatedValidities, errors: updatedErrors, isFormValid: updatedIsFormValid};

        }

        default: return {...state};

    }
}
