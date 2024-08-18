import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Outlet } from "react-router-dom";
import { StatesProvider } from "./contextAPI";
import { PublicChatBtn } from "./assets/data";
import MutualStates from "./contextAPI";
import { useContext } from "react";

const Index = () => {

    return (
        <StatesProvider>
            <Header />
            <Content />
            <Footer />
        </StatesProvider>
    );
};

const Content = () => {
    const { chatState } = useContext(MutualStates);

    return (
        <>
            {chatState ? <PublicChatBtn /> : null}
            <Outlet />
        </>
    );
};

export default Index;