'use client'
import { useEffect, useState } from "react";

export function Child({ ct, setCount }: { ct: number; setCount: (ct: number) => void }) {
    return (
        <>
            <h1>This is the count {ct}</h1>
            <button onClick={() => setCount(ct + 2)}>Increment</button>
        </>
    );
}

export default function Parent() {
    const [ct, setCt] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (name) {
                console.log('Heyyyyy', name);
            }
        }, 500);
        return () => clearTimeout(timeout);
    }, [name]); // Run when name changes

    return (
        <>
            <h1>Hi this is me and ct is {ct}</h1>

            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Type your name"
            />

            <Child ct={ct} setCount={setCt} />
        </>
    );
}
