export const creditCardDataInitialState = {
    values: {
        creditCardNumber: "",
        cvv: "",
    },
    validities: {
        creditCardNumber: true,
        cvv: true,
    },
    errors: {
        creditCardNumber: "Credit Card Number is requier",
        cvv: "CVV Number is requier",
    },
    isFormValid: false,
};

export const creditCardReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_CREDIT_CARD":{
            // update creditCardNumber
            const updatedValues = {...state.values, creditCardNumber: action.value};
            // update validities
            const updatedValidities = {...state.validities, creditCardNumber: action.isValid};
            // update errors
            const updatedErrors = {...state.errors}
            // Initial typing checking the fields
            updatedValidities.cvv = updatedValues.cvv === '' ? false : true;

            // check if form is valid and change button to undispatch
            const updatedIsFormValid = (action.isValid && updatedValidities.cvv);
            return {values: updatedValues, validities: updatedValidities, errors: updatedErrors, isFormValid: updatedIsFormValid};
        }
        case "UPDATE_CVV":{
            // update cvv
            const updatedValues = {...state.values, cvv: action.value};
            // update validities
            const updatedValidities = {...state.validities, cvv: action.isValid};
            // update errors
            const updatedErrors = {...state.errors}
            // Initial typing checking the fields
            updatedValidities.creditCardNumber = updatedValues.creditCardNumber === '' ? false : true;

            // check if form is valid and change button to undispatch
            const updatedIsFormValid = (action.isValid && updatedValidities.creditCardNumber);
            return {values: updatedValues, validities: updatedValidities, errors: updatedErrors, isFormValid: updatedIsFormValid};
        }
        default: return {...state};

    }
}
