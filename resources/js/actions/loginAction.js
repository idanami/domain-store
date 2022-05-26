export const updateLoginUserNameAction = (value, isValid) => ({
    type: 'UPDATE_USER_NAME',
    value,
    isValid
});
export const updateLoginPasswordAction = (value, errorMessage, isValid) => ({
    type: 'UPDATE_PASSWORD',
    value,
    errorMessage,
    isValid
});
