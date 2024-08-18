import { createContext, useState, useEffect } from "react";

const MutualStates = createContext({
    menu: false,
    handleMenu: () => { },
    chatState: true,
})

export const StatesProvider = ({ children }) => {

    const [menu, setMenu] = useState(false);
    const [chatState, setChatState] = useState(true);

    const handleMenu = () => {
        setMenu(p => !p);
    }
    const handleChatState = () => {
        console.log("clicked 356")
        setChatState(p=>!p);
    }

    return (
        <MutualStates.Provider value={{ menu, handleMenu, chatState, handleChatState }}>
            {children}
        </MutualStates.Provider>
    )
}

export default MutualStates;