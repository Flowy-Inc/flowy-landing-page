import React from 'react';

import styled from 'styled-components';

// Global Components
import { Button } from '../../components/button/Button';
import { Navbar } from '../../components/ui/Navbar';
import { VideoCard } from '../../components/ui/VideoCard';

import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';

const Home: React.FC = () => {
    return(
        <>
            <Navbar />
            <WelcomeScreen>
                <div className="center-display">
                    <h1>เปลี่ยน<span>สเปซ</span><br />ให้เป็น<span>สตางค์</span></h1>
                    <p>จะดีกว่าไหม? ถ้าทำเงินจากพื้นที่ของคุณได้<br />ด้วยการปล่อยเช่าเป็นที่อ่านหนังสือหรือโคเวิร์คกิ้งสเปซ</p>
                    <Button>สมัครเป็นผู้ให้เช่า!</Button>
                </div>
                <VideoCard />
            </WelcomeScreen>
            <SecondSection />
            <ThirdSection />
        </>
    );
}

const WelcomeScreen = styled.div`
    padding: 12px 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10em;

    background-image: url('/images/gradient-background.png');
    background-size: 70%;
    background-repeat: no-repeat;
    background-position: 70% 30%;
    height: 90vh;

    .center-display {
        display: flex;
        flex-direction: column;
        align-items: center;

        * {
            margin: 10px 0px;
        }
    }

    @media screen and (max-width: 1100px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background-size: cover;

        .center-display {
            display: flex;
            text-align: center;
            justify-content: center;
            align-items: center;
        }
    }
    
`;

export default Home;