import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

function UserProfile() {
    return (
        <>
            <section>
                <div className='user-profile'>
                    <div className='user-profile-icon'>
                        <span><FaUserAlt /></span>
                    </div>

                    <div className='user-profile-detail'>

                        <p>
                            <span>Name : </span>
                            <span>Username</span>
                        </p>
                        <p>
                            <span>Surname : </span>
                            <span>Usersurname</span>
                        </p>
                        <p>
                            <span>Gender : </span>
                            <span>Male</span>
                        </p>
                        <p>
                            <span>E-Mail Address : </span>
                            <span>user-mail@gmail.com</span>
                        </p>
                        <p>
                            <span>Address : </span>
                            <span>New York/NYC, United States</span>
                        </p>
                        <p>
                            <span>Contact Number : </span>
                            <span>+123 456 890</span>
                        </p>
                    </div>

                    <button className='edit-btn'>
                        <span>
                            <FaPencilAlt />
                        </span>
                        Edit
                    </button>
                </div>
            </section>

        </>
    )
}

export default UserProfile;