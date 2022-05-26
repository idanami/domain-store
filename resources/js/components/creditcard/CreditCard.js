import React, { useContext, useReducer } from "react";
import { updateCreditCardNumberAction, updateCVVNumberAction } from "../../actions/domainAction";
import { creditCardDataInitialState, creditCardReducer } from "../../reducer/creditCardReducer";
import validator from 'validator';
import { LoginContext } from "../../context/LoginContext";
import { addDomain } from "../../server/DB";
import { useNavigate } from "react-router-dom";


const CreditCard = (props) => {
    const [creditCardFormData , dispatchCreditCardFormData ] = useReducer(creditCardReducer, creditCardDataInitialState);
	const { userData, dispatchUserData } = useContext(LoginContext);
    const navigate = useNavigate();

    const onInputCreditCard = (event) => {
         const creditCardNumber = event.target.value.trim();
        if(validator.isCreditCard(creditCardNumber))
                return dispatchCreditCardFormData(updateCreditCardNumberAction(creditCardNumber, '', true));

        dispatchCreditCardFormData(updateCreditCardNumberAction(creditCardNumber, 'credit card number is invalid', false));
    }
    const onInputCvv = (event) => {
        const cvvNumber = event.target.value.trim();
        if(cvvNumber.length === 3)
                return dispatchCreditCardFormData(updateCVVNumberAction(cvvNumber, '', true));

        dispatchCreditCardFormData(updateCVVNumberAction(cvvNumber, 'cvv number is invalid', false));
    }

    const onSubmitForm = async (event) => {
        event.preventDefault();
        try{
            const domain = props.domain;
            const userId = userData.user.id;
            const addDomainToUser = await addDomain(domain,userId)
            navigate('/profile')
        } catch(e){
            console.log(e)
        }
    }

    return (
            <form className="form credit-card__form" onSubmit={onSubmitForm}>
                <div className="credit-card__input-container">
                    <label>Credit Card Number</label>
                    <input
                    type="text"
                    name="creditcard"
                    autoComplete='off'
                    onInput={onInputCreditCard}
                    />
                </div>
                {!creditCardFormData.validities.creditCardNumber && <div className="error">{creditCardFormData.errors.creditCardNumber}</div>}
                <div className="credit-card__input-container">
                    <label>CVV Number</label>
                    <input
                    type="text"
                    name="cvv"
                    autoComplete='off'
                    onInput={onInputCvv}
                    />
                </div>
                {!creditCardFormData.validities.cvv && <div className="error">{creditCardFormData.errors.cvv}</div>}
                 <div className="submit-container">
                    <button className="button button-add__domain" disabled={!creditCardFormData.isFormValid}>Add Domain</button>
                </div>
            </form>
        )

}
export default CreditCard;
