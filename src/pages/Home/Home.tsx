import React from 'react';

import styled from 'styled-components';

// Global Components
import { Navbar } from '../../components/ui/Navbar';

// Sections
import WelcomeScreen from './WelcomScreen';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import ForthSection from './ForthSection';

const Home: React.FC = () => {
    return(
        <>
            <Navbar />
            <WelcomeScreen />
            <SecondSection />
            <ThirdSection />
            <ForthSection />
        </>
    );
}

export default Home;