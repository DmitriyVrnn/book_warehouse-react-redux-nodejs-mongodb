import React from 'react'
import PropTypes from 'prop-types'

const UserInfo = (props) => {
    return (
        <div className="block-user">
            <span className="name-user">{props.name}</span>
            <span>{props.role}</span>
            {console.log(props)}
        </div>
    )
};

UserInfo.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
};

export default UserInfo;