import { useRef } from "react";

export default function Page5() {
    const inputRef = useRef(null); // 1. Create a ref

    const handleFocus = () => {
        console.log("Ref value:", inputRef.current); // ✅ Debug
        inputRef.current?.focus();
    };


    return (
        <>
            <input type="text" ref={inputRef} placeholder="Enter Value here" />
            <button onClick={handleFocus}>Focus on input</button>
        </>
    );
}
