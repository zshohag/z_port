import React from 'react';
import Header from '../../Shared/Header/Header';
import Mailer from '../Mailer/Mailer';
import MyProjects from '../MyProjects/MyProjects';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <TopBanner></TopBanner>
            <Mailer></Mailer>
        </div>
    );
};

export default Home;