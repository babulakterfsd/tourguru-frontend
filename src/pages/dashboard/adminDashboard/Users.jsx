import React from 'react';
import useAuth from '../../../hooks/useAuth';

function Users() {
    const { allUsers } = useAuth();
    console.log(allUsers);
    return (
        <div>
            <p>this is users list</p>
        </div>
    );
}

export default Users;
