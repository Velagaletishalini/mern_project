
import { Mycontext } from "./Mycontext";
import { useContext } from "react";

export default function Mycomponent() {
    const { text, setText } = useContext(Mycontext);
    // Consumer
    return (
        <div>
            <h1>{text}</h1>
            <button onClick={() => setText("Hello World")}>Click</button>
        </div>
    );
}
