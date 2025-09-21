import { useEffect, useState } from "react";

export default function Timer() {
    const [ct, setCt] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            console.log('Runs after 2 sec');
        }, 2000); 

        const intervalId = setInterval(() => {
            setCt(prevCt => prevCt + 1);
        }, 1000);

        console.log(intervalId, 'intervalId');

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeout);
        };
    }, []);


    return (
        <div>
            Timer count: {ct} seconds
        </div>
    );
}
