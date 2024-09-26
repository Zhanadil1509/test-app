import {Header} from "../header/Header.tsx";
import {Container} from "../container/Container.tsx";
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
    return (
        <Container>
            <Header />
            <Outlet />
        </Container>
    );
};