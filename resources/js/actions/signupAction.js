export const updateSignupFirstNameAction = (value, isValid) => ({
    type: 'UPDATE_FIRST_NAME',
    value,
    isValid
});
export const updateSignupFamilyNameAction = (value, isValid) => ({
    type: 'UPDATE_FAMILY_NAME',
    value,
    isValid
});
export const updateSignupEmailAction = (value, errorMessage, isValid) => ({
    type: 'UPDATE_EMAIL',
    value,
    errorMessage,
    isValid
});
export const updateSignupPhoneNumberAction = (value, errorMessage, isValid) => ({
    type: 'UPDATE_PHONE_NUMBER',
    value,
    errorMessage,
    isValid
});
export const updateSignupUserNameAction = (value, isValid) => ({
    type: 'UPDATE_USER_NAME',
    value,
    isValid
});
export const updateSignupPasswordAction = (value, errorMessage, isValid) => ({
    type: 'UPDATE_PASSWORD',
    value,
    errorMessage,
    isValid
});
export const signUpEmailExistAction = (emailExist, isValid) => ({
    type: 'EMAIL_EXSIST',
    emailExist,
    isValid
});
