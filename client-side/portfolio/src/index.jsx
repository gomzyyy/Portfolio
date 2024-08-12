import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Outlet } from "react-router-dom";
import { StatesProvider } from "./contextAPI";

const Index = () => {

    return (
        
    <StatesProvider>
        <Header />
        <Outlet />
        <Footer />
    </StatesProvider>

    )}
export default Index;