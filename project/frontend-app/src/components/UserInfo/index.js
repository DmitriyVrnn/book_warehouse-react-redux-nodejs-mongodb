import React from 'react'
import PropTypes from 'prop-types'

const UserInfo = (props) => {
    return (
        <div className="block-user">
            <span className="name-user">{props.name}</span>
        </div>
    )
};

UserInfo.propTypes = {
    name: PropTypes.string.isRequired
};

export default UserInfo;