'use client'
import { useEffect, useState } from 'react';

function Demo({ name }: { name: string }) {
    useEffect(() => {
        console.log('🟢 Mounted or updated');

        return () => {
            console.log('🔴 Cleanup before unmount or update');
        };
    }, [name]);

    return <h1>Hello {name}</h1>;
}

export default function Parent() {
    const [show, setShow] = useState(true);
    const [name, setName] = useState('Alice');

    return (
        <div>
            <button onClick={() => setShow(s => !s)}>Toggle Demo</button>
            <button onClick={() => setName(n => n === 'Alice' ? 'Bob' : 'Alice')}>Change Name</button>

            {show && <Demo name={name} />}
        </div>
    );
}
