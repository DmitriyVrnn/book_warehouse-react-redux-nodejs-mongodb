import React from 'react'
import PropTypes from 'prop-types'

const UserInfo = (props) => {
    return (
        <div>
            <span>{props.name}</span>
        </div>
    )
};

UserInfo.propTypes = {
    name: PropTypes.string.isRequired
};

export default UserInfo;