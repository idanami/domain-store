export const updateCreditCardNumberAction = (value, errorMessage, isValid) => ({
    type: 'UPDATE_CREDIT_CARD',
    value,
    errorMessage,
    isValid
});
export const updateCVVNumberAction = (value, errorMessage, isValid) => ({
    type: 'UPDATE_CVV',
    value,
    errorMessage,
    isValid
});
