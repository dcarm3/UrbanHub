import React, { useEffect, useState } from 'react';
import api from '../api/api';
import Header from '../components/header';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        api.get('/users').then((res) => setUsers(res.data));
    }, []);

    return (
        <div>
            <Header />
            <div className="p-6">
                <h1 className="text-2xl font-bold">Usuários</h1>
                <ul className="list-disc ml-5 mt-2">
                    {users.map((user: any) => (
                        <li key={user._id}>{user.name} - {user.email}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Users;