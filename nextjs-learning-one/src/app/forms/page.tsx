'use client'
import { useState } from 'react';

export default function Forms() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Submitted Successfully');
        console.log({ firstName, lastName, age });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="Enter First name here"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter Last name here"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Enter Age here"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
