import { useState, useRef, createContext } from "react";

export const context = createContext();

const ContextProvider = (props) => {
    const list = useRef();
    const sections = useRef([]);
    const img1 = useRef() ;
    const text1 = useRef([]);
    const img2 = useRef(); 
    const overlay2 = useRef(); 
    const text2 = useRef([]);
    const text3 = useRef([]);
    const img3 =useRef([]);
    const container4 = useRef();
    const img4 = useRef(); 
    const text4 = useRef();
    const text5 = useRef([]);
    const img5 = useRef();
    const text6 = useRef([]);

    const obj = {
        sections,
        img1, text1,
        img2, overlay2, text2,
        text3, img3,
        container4, img4, text4,
        text5,
        img5,
        text6,
        list
    }

    return <context.Provider value={obj}>
        {props.children}
    </context.Provider>
}

export default ContextProvider