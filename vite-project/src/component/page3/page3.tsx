import { useEffect, useState } from "react";

export default function App3() {
    const [ct, setCt] = useState(0);

    const updatedCt = () => {
        setCt(ct + 1);
    }
    useEffect(() => {
        console.log("Component Mounted or count updated")
    }, [ct])

    useEffect(() => {
        console.log("Component Mounted here");

        return (() => {
            console.log("Component will Unmount");
        })
    }, [])
    return (
        <>
            <h1>Hi ct is {ct}</h1>
            <button onClick={updatedCt}>Increment</button>
        </>
    )
}