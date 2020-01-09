import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

// loading, success, error 총 3가지 action.
function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
        case 'SUCCESS':
        case 'ERROR':
        default:
            return state;
    }
}

function Users() {

    const [state, dispatch] = useReducer(reducer,{
        loading: false,
        data: null,
        error: null,
    });

    const fetchUsers = async () => {
        try {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users/'
            );


        } catch (e) {
            console.log(e.response.status);
        }
    }
    
    useEffect(() => {
        fetchUsers();

    },[]);


    const { loading, data: users, error } = state;
    if (loading) return <div>로딩중...</div>
    if (error) return <div>에러가 발생했습니다.</div>
    if (!users) return null;


    return (
        <>
            <ul>
                {users.map(user => <li key={user.id}>
                    {user.username} ({user.name})
                </li>)}
            </ul>
            <button onClick={fetchUsers}>다시 불러오기</button>
        </>
    );

}

export default Users;
