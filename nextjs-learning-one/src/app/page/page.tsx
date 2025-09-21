'use client';

import React, { useState } from 'react';

type ChildProps = {
    name: string;
    count?: number;
    age: number;
    names: string[];
};

function Child(props: ChildProps) {
    const { name, count, age, names } = props;

    return (
        <div>
            <h1>
                Hi, I am {name} Gupta and age is {age}, the count is {count}
            </h1>

            <div>
                {names.map((o, index) => (
                    <p key={index}>This is {o}</p>
                ))}
            </div>
        </div>
    );
}
const names = ['Ashu', 'Jatin', 'Priyanshu', 'Ansh'];
export default function Page() {
    const [count, setCount] = useState(0);
    const [val, setVal] = useState<{ name: string }>({ name: names[0] });

    const MIN_COUNT = 0;
    const MAX_COUNT = 10;

    const increaseCount = () => {
        if (count >= MAX_COUNT) return;
        setCount(prev => prev + 1);
    };

    const decreaseCount = () => {
        if (count <= MIN_COUNT) return;
        setCount(prev => prev - 1);
    };

    const addDot = () => {
        setVal(prev => ({
            ...prev,
            name: prev.name + '.',
        }));
    };


    const names2 = names.length > 0 ? names[0] : 'Unknown';

    return (
        <div style={{ padding: '20px' }}>
            <button onClick={increaseCount} style={{ marginRight: '10px' }}>
                Increment
            </button>

            <button onClick={decreaseCount}>Decrement</button>

            <h1>Hi I am {names2}</h1>

            <Child name="Jedex" age={12} names={names} count={count} />

            <button onClick={() => LearnHandler(count)}>Click Me</button>
            <button onClick={addDot}>Set Val</button>

            <h2>Value: {val.name}</h2>
        </div>
    );
}

function LearnHandler(count: number) {
    console.log(count, '← current count');
    console.log('Hi, I got clicked');
}
