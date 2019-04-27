import React from 'react'
import PropTypes from 'prop-types'

const Profile = (props) => {
    const {name} = props;
    return (
        <div>
            <span>{name}</span>
        </div>
    )
};

Profile.propTypes = {
    name: PropTypes.string
}

export default Profile;