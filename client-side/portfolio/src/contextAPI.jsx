import { createContext, useState } from "react";

const MutualStates = createContext({
    menu: false,
    handleMenu: () => { }
})

export const StatesProvider = ({ children }) => {

    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(p => !p);
    }

    return (
        <MutualStates.Provider value={{ menu, handleMenu }}>
            {children}
        </MutualStates.Provider>
    )
}

export default MutualStates;