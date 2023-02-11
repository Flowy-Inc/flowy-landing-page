import React from 'react';

import styled from 'styled-components';

// Global Components
import { Navbar } from '../../components/ui/Navbar';

// Sections
import WelcomeScreen from './WelcomeScreen';
import HowFlowyWorksSection from './HowFlowyWorksSection';
import FirstStepSection from './FirstStepSection';
import SecondStepSection from './SecondStepSection';
import ThirdStepSection from './ThirdStepSection';
import AnythingAnywhereSection from './AnythingAnywhereSection';
import TestimonialSection from './TestimonialSection';
import EndingSection from './EndingSection';

const Home: React.FC = () => {
    return(
        <Wrapper>
            <Navbar />
            <WelcomeScreen />
            <HowFlowyWorksSection />
            <FirstStepSection />
            <SecondStepSection />
            <ThirdStepSection />
            <AnythingAnywhereSection />
            <TestimonialSection />
            <EndingSection />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100vw;
`;

export default Home;