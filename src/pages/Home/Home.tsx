import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styled from 'styled-components';

// Global Components
import { Navbar } from '../../components/ui/Navbar';
import { LoadingScreen } from '../../components/ui/LoadingScreen';

// Sections
import WelcomeScreen from './WelcomeScreen';
import HowFlowyWorksSection from './HowFlowyWorksSection';
import FirstStepSection from './FirstStepSection';
import SecondStepSection from './SecondStepSection';
import ThirdStepSection from './ThirdStepSection';
import AnythingAnywhereSection from './AnythingAnywhereSection';
import TestimonialSection from './TestimonialSection';
import EndingSection from './EndingSection';

const VIDEO_PATH = "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-home-office-in-dining-room-4955-large.mp4/";

const Home: React.FC = () => {
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    useEffect(() => {
        try {
            axios.get(VIDEO_PATH as string, { timeout: 5000 })
            .then(() => { 
                setTimeout(() => {
                    setIsSuccess(true)
                }, 1500)
            });

        } catch(err: any) {
            throw new Error(err.message);
        }
    },[]);
    
    return(
        <>
        {isSuccess ? 
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
             : <LoadingScreen />}
        </>
    );
}

const Wrapper = styled.div`
    width: 100vw;
`;

export default Home;