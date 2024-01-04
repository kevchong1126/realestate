import { useState, createContext } from "react";

export const context = createContext();

const ContextProvider = (props) => {
    const [offset1, setOffset1] = useState(0);
    const [offset2, setOffset2] = useState(0);
    const [offset3, setOffset3] = useState(0);
    const [offset4, setOffset4] = useState(0);
    const [color, setColor] = useState('#fff');

    const obj = {
        offset1, setOffset1,
        offset2, setOffset2,
        offset3, setOffset3,
        offset4, setOffset4,
        color, setColor
    }

    return <context.Provider value={obj}>
        {props.children}
    </context.Provider>
}

export default ContextProvider