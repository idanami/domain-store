import React, { useState } from "react";
import CreditCard from "../creditcard/CreditCard";
import validator from 'validator';
import { checkDomainExists } from "../../server/DB";


const Home = () => {
    const [wrongDomain, setWrongDomain] = useState(false);
    const [existingDomain, setExistingDomain] = useState(false);
    const [addCard, setAddCard] = useState(false);
    const [domain, setDomain] = useState('');

    const onSubmitForm = async (event) => {
        event.preventDefault();
        try{
            const domain = event.target.domain.value.trim();
            if((domain.endsWith("org.il") || domain.endsWith("co.il") && validator.isURL(domain))) {
                setWrongDomain(false)
                const checkDomain = await checkDomainExists(domain)

                if(!checkDomain.emailExist) {
                    setAddCard(true)
                    setDomain(domain);
                } else {
                    setExistingDomain(true);
                }
            } else {
                setWrongDomain(true)
                setAddCard(false)
            }

        } catch(e){
            console.log(e)
        }
    }

    return (
            <div className="home-page">
                <form className="form home-page__form" onSubmit={onSubmitForm}>
                    <div className="home-page__input-container">
                        <label>Domain</label>
                        <input
                        type="text"
                        name="domain"
                        autoComplete='off'
                        />
                    </div>
                    <div className="submit-container">
                        <button className="button button-check">Check Domain</button>
                    </div>
                    {
                        wrongDomain
                        ?
                        (
                            <div className="error-domain">Wrong domain Please try again</div>
                        )
                        :
                        (
                            existingDomain ? <div className="error-domain">The Domain is already taken</div> : <></>
                        )
                    }
                </form>
                {
                    addCard ? <CreditCard domain={domain} /> : <></>
                }

            </div>
        )

}
export default Home;
