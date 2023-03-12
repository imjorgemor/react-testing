import { useState, useEffect } from 'react';

export const Users = () => {
    const [users, setUsers] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetching = async() => {
            try {
                const res:any = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await res.json();
                console.log(data);
                setUsers(data.map((user: { name: string }) => user.name));
            } catch {
                setError('Error fetching users');
            }
        };
        fetching();
    }, []);
    return (
        <div>
            <h1>Users</h1>
            {error && <p>{error}</p>}
            <ul>
                {users.map((user) => (
                    <li key={user}>{user}</li>
                ))}
            </ul>
        </div>
    );
};