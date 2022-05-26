import { nanoid } from "nanoid";
import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { getDomainByUser } from "../../server/DB";


const Profile = () => {
    const { userData, dispatchUserData } = useContext(LoginContext);
    const [domainList, setDomainList] = useState(null);

    useEffect(async () => {
        try {
            const getDomainList = await getDomainByUser(userData.user.id)
            if(getDomainList)
                setDomainList(getDomainList.domain);
        } catch (err) {
            console.log(err);
        }

    }, [])

    return (
            <div className="profile-container">
                <div className="profile-field profile-fullName">
                    <div>{userData.user.firstName + " - " + userData.user.familyName}</div>
                    <div> :שם מלא</div>
                </div>
                <div className="profile-field profile-username">
                    <div>{userData.user.userName}</div>
                    <div> :שם משתמש</div>
                </div>
                <div className="profile-field profile-email">
                    <div>{userData.user.email}</div>
                    <div> :אימייל</div>
                </div>
                <div className="profile-field profile-phone">
                    <div>{userData.user.phoneNumber}</div>
                    <div> :מספר פלאפון</div>
                </div>
                <div className="doamin-list">
                        {   domainList
                            ?
                            (
                                <>
                                    <ul>
                                        <li className="li-h">רשימת דומיינים</li>
                                        {
                                        domainList.map((domain) => (
                                            <li key={nanoid()}>{domain.domain}</li>
                                            ))
                                        }
                                    </ul>
                                </>
                            ) : <div>no domain</div>
                        }
                </div>
            </div>
        )

}
export default Profile;
