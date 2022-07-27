/* eslint-disable no-unused-vars */
import React from 'react';
import useAuth from '../../../hooks/useAuth';

function Profile() {
    const { user } = useAuth();

    return (
        <div>
            <p>This is user profile</p>
        </div>
    );
}

export default Profile;
