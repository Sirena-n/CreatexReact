import { Outlet } from "react-router-dom";
import React, { useState } from 'react';

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import GetConsultation from "../Components/GetConsultation/GetConsultation";

const Layout = () => {
    const [consult, setConsult] = useState(false);
    const changeConsult = () => {
        setConsult(!consult)
    }

    return (
        <>
            <Header changeConsult={changeConsult} />
            <main>
                <Outlet />
                <GetConsultation changeConsult={changeConsult} consult={consult} />
            </main>
            <Footer />
        </>
    );
};

export default Layout;