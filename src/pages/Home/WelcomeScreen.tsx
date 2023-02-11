import React from 'react';

import styled from 'styled-components';

// Global Components
import { Button } from '../../components/button/Button';
import { VideoCard } from '../../components/ui/VideoCard';

const WelcomeScreen: React.FC = () => {
    return (
        <Section>
            <Content>
                <div className="text">
                    <h1>เปลี่ยน<span>สเปซ</span><br />ให้เป็น<span>สตางค์</span></h1>
                    <p>จะดีกว่าไหม? ถ้าทำเงินจากพื้นที่ของคุณได้<br />ด้วยการปล่อยเช่าเป็นที่อ่านหนังสือหรือโคเวิร์คกิ้งสเปซ</p>
                    <Button>สมัครเป็นผู้ให้เช่า!</Button>
                </div>
                <VideoCard />
            </Content>
        </Section>
    );
}

const Section = styled.div`
    padding: 18px;
    /* padding: 12px 36px; */
    min-height: 100vh;

    background-image: url('/images/gradient-background.png');
    background-size: 70%;
    background-repeat: no-repeat;
    background-position: 70% 30%;
    background-size: cover;

    .text {
        display: flex;
        flex-direction: column;
        align-items: center;

        * {
            margin: 10px 0px;
        }
    }

    @media screen and (max-width: 440px) {
        h1 {
            font-size: 3em;
        }
    }
    
`;

const Content = styled.div`
    padding-top: clamp(3rem,1.72rem + 3vw,5rem);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10em;

    @media screen and (max-width: 1200px) {
        gap: 4em;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .text {
            /* width: 100%; */
            display: flex;
            text-align: center;
        }
    }
`

export default WelcomeScreen;