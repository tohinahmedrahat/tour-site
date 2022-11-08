import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterSection from '../../Shared/FooterSection/FooterSection';
import Header from '../../Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <FooterSection></FooterSection>
        </div>
    );
};

export default Main;