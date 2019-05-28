import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const UserInfo = ({name, role, onLogout, avatar}) => {
    return (
        <>
            <div className="block-user">
                <div className="user-information">
                    <span className="role-user">{role}</span>
                    <span className="name-user">{name}</span>
                    <Link className="logout-link" to={"/"} onClick={onLogout}>Выход <i className="fas fa-sign-out-alt"></i></Link>
                </div>
                <img className="avatar-user" src={avatar} alt="avatar"/>
            </div>
        </>

    )
};

UserInfo.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
};

export default UserInfo;